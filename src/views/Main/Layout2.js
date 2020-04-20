import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Colors from '../../common/Colors'
import { creatApp,appInit} from '../../redux/actions/appsActions';
import { history } from '../../common';
import Link from '../../components/Link';
import Menu from '../../components/Menu';
import './style.css';
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
  headContainer:{
   backgroundColor:Colors.DarkBlue,
   padding:5,
   height:65,
   position:'relative'
  },
  logo:{
    float:'left',
    width:65,
    position:'absolute'
  },
  aLogo:{
    float:'left',
    position:'relative'
  },
  logout:{
    float:'right',
    marginTop:15
  },
  headContent:{
    position:'relative',
  },
  logoutBtn:{
  color:"#efefef",
  },
  Menu:{
    marginLeft:'40%',float:'left',marginTop:15
  },
  PageContent:{
    float:'left',backgroundColor:Colors.BrightGrey,
    width:'100%'
  }
});

class Layout2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameValidity: null,
      checkingUserName: null,
    };
  }
  
 
  render() {
    const { classes, children } = this.props;
    return (
      <Grid container className={classes.root}>
        <div className={classes.headContainer}>
          <div className={[classes.container]} href={'/'}>
          <a className={[classes.aLogo]} href={'/'}>
            <img
              src='/images/logos/small-logo.png'
              alt='logo'
              className={classes.logo}
            />
            </a>
            <div className={classes.Menu}>
            <Menu/>
            </div>
            <div className={classes.logout} >
            <Link to='/login' label="Logout" style={classes.logoutBtn} />
            </div>
          </div>
        </div>
        <div className={classes.PageContent}>
          {children}
        </div>
      </Grid>
    );
  }
}


export default (withStyles(useStyles)(Layout2))
