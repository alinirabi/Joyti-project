import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import LoginForm from './LoginForm';
import { Constants } from '../../common';
import {history} from '../../common'


const useStyles = theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  typoContent: {
    fontSize: '20px'
  },
  forgotPassword: {}
});
class Login extends Component {
  onSubmit = formValues => {
    history.push({ pathname: '/dashboard'});
  };

  render() {
    const UserName = localStorage.getItem(Constants.STORE_USER_NAME_KEY);
    return (
      <React.Fragment>
        <LoginForm
          onSubmit={this.onSubmit}
          initialValues={{ UserName }}
          loading={this.props.loading}
          errorMessage={this.props.errorMessage}
        />
      </React.Fragment>
    );
  }
}


export default (withStyles(useStyles)(Login));
