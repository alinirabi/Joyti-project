import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Copyright from './Copyright';
import './mainGrid.css';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typoContent: {
    fontSize: '20px'
  },
  logo: {
    maxWidth: 400,
    maxHeight: 300,
    margin:' 0 auto',
    display: 'block',
  },
  container: {
    position: 'relative',
    width:500,
    margin:'0 auto',
    padding:'40px 20px',
    borderRadius:5,
  },
  forgotPassword: {}
}));

export default props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {/* <CssBaseline />
      <Banner />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={8} square> */}
      <div className={classes.container}>
      <img
        src='/images/logos/logo.png'
        alt='logo'
        className={classes.logo} />
        <div className={classes.paper}>
          {props.children}
          <Box mt={5}>
            <Copyright />
          </Box>
          </div>
        </div>
      {/* </Grid> */}
    </Grid>
  );
};
