import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Colors from '../../common/Colors';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Search from './components/Search';
import ListData from './components/ListData';
import {history} from '../../common';

const useStyles = theme => ({
  root: {
    maxWidth:'1200px',
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
  row: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    float: 'left'
},
btnContainer: {
  width: 200, margin: '0 auto',
},
});

class CategoryList extends Component {
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
       <div className={classes.row}>
                        <div className={classes.btnContainer}>
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
                                    marginLeft: 10,
                                    width: 230
                                }}
                                onClick={()=>{history.push({pathname:'/new-category'})}}
                            // disabled={invalid || loading}
                            >
                              Add New Category
        </Button>
                        </div>
                    </div>
      </Grid>
    );
  }
}


export default (withStyles(useStyles)(CategoryList))
