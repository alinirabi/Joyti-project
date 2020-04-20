import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Colors from '../../../common/Colors';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FileUploader from '../../../components/FileUploader'
import {history} from '../../../common'
import Tags from  './tags';
import Switches from './rated'
const useStyles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: theme.spacing(2)
    },
    fullWidth: {
        width: '100%',
    },
    icon: {
        marginLeft: 11,
        marginTop: 10,
        float: 'left',
    },
    CategoryTitle: {
        borderBottom: `dashed  2px ${Colors.Red}`,
        paddingBottom: 10,
        marginBottom: 20,
        [theme.breakpoints.down('sm')]:{
            width:'90%',
            margin:'0 auto',
            float:'none'
          }
    },
    CategoryTitleText: {
        color: Colors.Red,
        display: 'inline'
    },
    addnNewBtn: {
        float: 'right'
    },
    row: {
        width: '100%',
        marginBottom: 10,
        float: 'left',
        [theme.breakpoints.down('sm')]:{
            width:'90%',
            margin:'0 auto',
            float:'none'
          }
    },
    leftSide: {
        width: '50%', float: 'left',
        boxSizing: 'border-box',
        [theme.breakpoints.down('530')]:{
            width:'90%',
            margin:'0 auto',
            float:'none',
            padding:'0 !important',
            marginBottom:20
          }
    },
    btnContainer: {
        width: 500, margin: '0 auto',
        [theme.breakpoints.down('530')]:{
            width:'90%',
            margin:'0 auto',
            float:'none'
          }
    },
    submit:{
        width:230,
        [theme.breakpoints.down('530')]:{
            width:'90%',
            margin:'0 auto',
            float:'none',
            marginLeft:'0 !important',
            marginBottom:20
          } 
    },
    textbox: {
        padding: 15,
        width: '100%',
        border: 'none',
        boxShadow: '1px 2px 3px #999',
        boxSizing: 'border-box',
    },
    discardChanges:{
        width:"100%",
        textAlign:'center',
        float: 'left',
        marginTop: 16,
        fontWeight: 'bold'
    },
    text:{
        marginBottom:5,float:'left'
    }
})

class AddNewCategory extends Component {
    goToList=()=>{
        history.push({pathname:'/dashboard'})
    }
    render() {
        const {
            classes,
        } = this.props;
        return (

            <Grid className={classes.fullWidth}>
                <div className={classes.form}>
                    <div className={classes.row}>
                        <div className={classes.leftSide} style={{paddingRight:10}}>
                            <label className={classes.text}>Category Name</label>
                            <input type="text" className={classes.textbox} />
                        </div>
                        <div className={classes.leftSide} style={{paddingLeft:10}}>
                        <label className={classes.text}>Tags</label>
                           <Tags/>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.leftSide} style={{ paddingRight: 10 }}>
                            <FileUploader title={'Upload Category Image'} />
                        </div>
                        <div className={classes.leftSide} style={{paddingLeft:10}}>
                        <Switches/>
                        </div>
                    </div>
                
                    <br/>
                    <br/>
                    <br/>
                    <div className={classes.row} style={{marginTop:150}}>
                        <div className={classes.btnContainer}>
                            <Button
                                type='submit'
                                variant='contained'
                                color='secondary'
                                fullWidth
                                className={classes.submit}
                                style={{
                                    borderRadius: 3,
                                    backgroundColor: Colors.DarkBlue,
                                    padding: "15px 10px",
                                    fontSize: "18px",
                                   
                                }}
                                onClick={()=>history.push({pathname:'/dashboard'})}
                            // disabled={invalid || loading}
                            >
                                Preview
        </Button>
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
                                    marginLeft:10,
                                   
                                }}
                                onClick={()=>history.push({pathname:'/dashboard'})}
                            // disabled={invalid || loading}
                            >
                                Save Changes and Add
        </Button>
        <span className={classes.discardChanges}>Discard Changes</span>
                        </div>
                    </div>
                </div>
            </Grid>

        );
    }
}


export default (withStyles(useStyles)(AddNewCategory))
