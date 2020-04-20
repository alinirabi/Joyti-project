import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import { history } from '../../common';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  content: {
    paddingTop: 10,
    textAlign: 'center'
  },
  image: {
    marginTop: 40,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const AppError = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify='center' spacing={3}>
        <Grid item>
          <div className={classes.content}>
            <Typography variant='h3'  style={{color:'#fff'}}>Ahh: Something went wrong</Typography>
            <Typography variant='subtitle2'  style={{color:'#fff'}}>
              That's unexpected, One of our developers or QA should have to pay
              for this
            </Typography>
            <div>
              <Button
                color='secondary'
                style={{color:'#fff'}}
                startIcon={<KeyboardBackspaceOutlinedIcon />}
                onClick={() => history.push('/dashboard')}
              >
                Go back to Home Page
              </Button>
            </div>
            <img
              alt='Under development'
              className={classes.image}
              src='/images/undraw_server_down_s4lk.svg'
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AppError;
