import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Search from './components/Search';
import ListData from './components/ListData';

const useStyles = theme => ({
  root: {
    // maxWidth:'1200px',
    margin:'0 auto',
    width:'100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  container:{
    maxWidth:1180,
    margin:'0 auto'
  },  
});

class QuestionList extends React.Component {
  onSubmit = formValues => {
    // alert('formValues');
  };
  render() {
    const { classes, children } = this.props;
    return (
        <Grid container className={classes.container}>
        <Search
         onSubmit={this.onSubmit}
        />
      
       <ListData/>
      </Grid>
    );
  }
}

export default (withStyles(useStyles)(QuestionList));
