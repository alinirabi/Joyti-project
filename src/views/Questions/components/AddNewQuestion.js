import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Colors from '../../../common/Colors';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FileUploader from '../../../components/FileUploader'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Categories from './Categories';
import BckgColors from './BckgColors';
import { history } from '../../../common'
const useStyles = theme => ({
    root: {
        // height: '200vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: theme.spacing(2)
    },
    fullWidth: {
        width: '100%',
        // height: '200vh',
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
    CategoryTitle2:{
        borderBottom: `dashed  2px ${Colors.Red}`,
        paddingBottom: 10,
        marginBottom: 20,
        display: 'inherit',
        marginTop: 35,
        width: '100%',
        float: 'left',
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
    textbox: {
        padding: 15,
        width: '100%',
        border: 'none',
        boxShadow: '1px 2px 3px #999',
        boxSizing: 'border-box',

    },
    title: {
        marginBottom: 5,
        display: 'block',
        marginLeft: 7,
        float: 'left',
    },
    discardChanges: {
        width: "100%",
        textAlign: 'center',
        float: 'left',
        marginTop: 16,
        fontWeight: 'bold'
    },
    paddTop13:{
        paddingTop:10
    }
})

class AddNewCategory extends Component {

    render() {
        const {
            classes,
        } = this.props;
        return (

            <Grid className={classes.fullWidth}>
                <div className={classes.form}>
                    <div className={classes.row}>
                        <div className={classes.leftSide} style={{ paddingRight: 10 }}>
                            <label className={classes.title}>Category Name</label>
                            <Categories />
                        </div>
                    </div>

                    <div className={classes.CategoryTitle2}>
                        <h3 className={classes.CategoryTitleText}>
                            Set Question Information
            </h3>
                        <span className={classes.addnNewBtn}>
                            <AddCircleOutlineIcon /> Add New
            </span>
                    </div>
                    <div className={classes.row}>
                        <label className={classes.title}>Question</label>
                        <input type="text" className={classes.textbox} />
                    </div>

                    <div className={classes.row}>
                        <div className={classes.leftSide}>
                            <FileUploader title={'Add Question Image'} />
                        </div>
                        <div className={classes.leftSide} >
                            <div className={classes.paddTop13}>
                                <BckgColors />
                                <label className={classes.title}>Choose background color</label>
                            </div>
                        </div>
                    </div>
                    <div className={classes.row} style={{ marginTop: 150 }}>
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
                                onClick={() => { history({ pathname: '/questions-list' }) }}
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
                                    marginLeft: 10,
                                }}
                                onClick={() => { history.push({ pathname: '/questions-list' }) }}
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
