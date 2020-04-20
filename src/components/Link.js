import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Colors from '../common/Colors'

export default props => {
  return (
    <Grid item align='center'>
      <Button
        variant='outlined'
        color='primary'
        component={RouterLink}
        to={props.to}
        style={{
          borderRadius: 3,
          backgroundColor: 'none',
          border:'none',
          color:Colors.DarkGray
      }}
      >
        {props.icon}  
        {props.label}
        
      </Button>
      {/* <Link variant='body2' component={RouterLink} to={props.to}>
        {props.label}
      </Link> */}
    </Grid>
  );
};
