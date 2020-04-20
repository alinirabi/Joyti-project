import React from 'react';
import { Typography, Link } from '@material-ui/core';

export default () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center' style={{color:'#efefef'}}>
      {'Copyright © '}
      <Link color='inherit' href=''>
        Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
