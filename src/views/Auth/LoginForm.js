import React from 'react';
import { reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Field from '../../components/Field';
import PasswordField from '../../components/PasswordField';
import Colors from '../../common/Colors';
import MainGrid from '../../components/MainGrid';
import Link from '../../components/Link';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  typoContent: {
    fontSize: '20px'
  },
  margingTop10: {
    marginTop: 30
  },
  inputForm:{
    marginBottom:20,
    float:'left',
    width:'100%'
  }
}));

function LoginForm(props) {
  const classes = useStyles();
  const { handleSubmit, onSubmit, loading, invalid, errorMessage } = props;
  return (

<MainGrid>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.inputForm}>
        <Field
          name='UserName'
          label='Email'
          fullWidth
          // autoComplete='email'
          varient={'filled'}
          className={classes.margingTop10}
          />
        </div>
        <div className={classes.inputForm}>
        <PasswordField
          name='password'
          label='Password'
          type='password'
          fullWidth
          varient={'filled'}
          className={classes.margingTop10}
          // autoComplete='current-password'
          />
          </div>
          <div style={{float:'right',marginRight:-13}}>
          <Link to='/forgotPassword' label='Forgot Password?'  />
          </div>
          
          <div className={classes.inputForm}>
        <Button
          type='submit'
          variant='contained'
          color='secondary'
          fullWidth
          className={classes.submit}
          style={{
            borderRadius: 3,
            backgroundColor: Colors.Green,
            padding: "15px 10px",
            fontSize: "18px",
            width:'100%'
        }}
          // disabled={invalid || loading}
        >
          Login 
        </Button>
        </div>
      </form>
  
    </MainGrid>
  );
}
const validateForm = formValues => {
  const errors = {};
 
};

export default reduxForm({
  form: 'LoginForm',
  validate: validateForm
})(LoginForm);
