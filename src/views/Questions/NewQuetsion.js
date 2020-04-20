import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Colors from '../../common/Colors';
import Grid from '@material-ui/core/Grid';
import AddNewQuestion from './components/AddNewQuestion';


const useStyles = theme => ({
  root: {
    // maxWidth:'1200px',
    margin:'0 auto',
    width:'100%',
    // height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  container:{
    maxWidth:1180,
    margin:'0 auto'
  },  
  textCenter: {
    textAlign: 'center',
    width:"100%"
  },
  CategoryTitle: {
    borderBottom: `dashed  2px ${Colors.Red}`,
    paddingBottom: 10,
    marginBottom: 20,
    width:'100%',
    [theme.breakpoints.down('sm')]:{
      width:'90%',
      margin:'0 auto',
      float:'none',
      marginBottom:20
    }
},
CategoryTitleText: {
    color: Colors.Red,
    display: 'inline'
},
addnNewBtn: {
    float: 'right'
},
});

class NewQuetsion extends React.Component {
  onSubmit = formValues => {
    // alert('formValues');
  };
  render() {
    const { classes, children } = this.props;
    return (
        <Grid container className={classes.container}>
        <h3 className={classes.textCenter}>Create New Question</h3><br /><br />
        <div className={classes.CategoryTitle}>
          <h3 className={classes.CategoryTitleText}>
            Select Category
            </h3>
        </div>
        <AddNewQuestion />
      </Grid>
    );
  }
}

export default (withStyles(useStyles)(NewQuetsion));
