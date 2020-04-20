import React from 'react';
import { Field } from 'redux-form';

const renderTextField = props => {
  const {
    input,
    label,
    meta: { touched, invalid, error },
    type,
  } = props;
  console.log(props)
  console.log("props656565")
  return (
    <React.Fragment>
    <label style={{textAlign:'left',color:'#fff',width:"100%",float:'left',marginBottom:10}}>{label}</label>
    <Field
      name={input.name}
      component="input"
      type={type}
      style={{padding:15,width:"100%",float:'left',boxSizing: 'border-box'}}
      // placeholder={label} 
      />
  </React.Fragment>
  );
};

export default props => {
  return (
    <Field
      name={props.name}
      label={props.label}
      component={renderTextField}
      {...props}
    />
  );
};





