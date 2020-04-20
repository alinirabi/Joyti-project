import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Constants } from '../../common';
import MainGrid from '../../components/MainGrid';
import Field from '../../components/Field';
import Link from '../../components/Link';
import Colors from '../../common/Colors';

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

class ForgotPassword extends Component {
  
  onSubmit = formValues => {
    // alert()
  };

  render() {
    const { classes, handleSubmit, invalid, loading } = this.props;
    return (
      <React.Fragment>
        <MainGrid>
         
          <Typography className={classes.typoContent} variant='overline'>
           <span style={{color:"#fff"}}> {'Forgot Password'}</span>
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(this.onSubmit)}>
            <Field name='email' label='Email' fullWidth autoComplete='email' />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='secondary'
              className={classes.submit}
              style={{
                borderRadius: 3,
                backgroundColor: Colors.Green,
                padding: "15px 10px",
                fontSize: "18px",
                width:'100%'
            }}
            >
              SEND PASSWORD RESET EMAIL
            </Button>
          </form>
          <Link to='/login' label='Go back to Login' />
        </MainGrid>
      </React.Fragment>
    );
  }
}
const validateForm = formValues => {
  const errors = {};
  const { email } = formValues;
  if (!email || !Constants.EMAIL_VALID_REGEX.test(email)) {
    errors.email = 'Invalid Email address';
  }
  return errors;
};

const mapStateToProps = state => {
  return { state};
};

const formWrapped = reduxForm({
  form: 'forgotPassword',
  validate: validateForm
})(withStyles(useStyles)(ForgotPassword));

export default connect(mapStateToProps, {

})(formWrapped);
