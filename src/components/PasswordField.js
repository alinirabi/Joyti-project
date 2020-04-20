import React from 'react';
import { Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

const renderTextField = props => {
  const {
    input,
    label,
    meta: { touched, invalid, error },
    showPassword,
    setShowPassword,
  } = props;
  return (
    <div style={{position:'relative',float:'left',width:'100%'}}>
      <label style={{textAlign:'left',color:'#fff',width:"100%",float:'left',marginBottom:10}}>{label}</label>
      <Field
        name={input.name}
        component="input"
        type={showPassword ? 'text' : 'password'}
        style={{padding:15,width:"100%",float:'left',boxSizing: 'border-box'}}
        // placeholder={label} 
        />
        <InputAdornment position='end' style={{position:'absolute',right:-33,top:53}}>
            <IconButton
              aria-label='toggle password visibility'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
    </div>
  );
};

export default props => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Field
      name={props.name}
      label={props.label}
      component={renderTextField}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      {...props}
    />
  );
};
