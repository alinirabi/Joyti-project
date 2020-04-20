import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Colors from '../../../common/Colors';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';


const useStyles = theme => ({
  root: {
    height: '200vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: theme.spacing(2)
  },
  SearchBox:{
    width:'100%',
    backgroundColor:Colors.White,
    marginTop:22,
  },
  textbox:{
    border:'None',
    padding:'10px 20px',
    height:33,
    width:'calc(100% - 300px)',
    '&::placeholder': {
      textAlign:'left'
    }
  },
  icon:{
    marginLeft:11,
    marginTop:10,
    float:'left',
  }
  // underline: {
  //   "&&&:before": {
  //     borderBottom: "none"
  //   },
  //   "&&:after": {
  //     borderBottom: "none"
  //   }
  // }
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameValidity: null,
      checkingUserName: null,
      catData: null,
    };
  }
  render() {
    const {
      classes,
      handleSubmit,
    } = this.props;
    return (

      <Grid className={classes.SearchBox}>
        <form>
          <div>
         <div className={classes.icon}> <SearchIcon style={{color:Colors.Red,fontSize: 30}} /></div>
          <input type="text" className={classes.textbox} placeholder={"Search Questions"} />
          <Button
            type='submit'
            variant='contained'
            color='secondary'
            fullWidth
            className={classes.submit}
            style={{
              backgroundColor: Colors.Red,
              padding: "5px 10px",
              fontSize: "18px",
              width:150,float:'right',
              margin:'8px 7px 0 0',
              borderRadius:0
            }}
          // disabled={invalid || loading}
          >
            Search
        </Button>
          </div>
         
        </form>
      </Grid>

    );
  }
}


export default (withStyles(useStyles)(Search))