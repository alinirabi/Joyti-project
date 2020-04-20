import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '../../../components/Link';
import Colors from '../../../common/Colors';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';




const useStyles = theme => ({
  root: {
    height: '200vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: theme.spacing(2)
  },
  ul: {
    margin: 0,
    padding: 0,
    width: '100%'
  },
  li: {
    listStyle: 'none',
    padding: 0,
    float: 'left',
    width: '100%',
    padding: 10,
    boxSizing: 'border-box'
  },
  textFinance: {
    textAlign: 'center'
  },
  ContainerBtns:{
    float:'right'
  },
  Btn:{
    float:'right'
  },
  AddBtn:{
    width:190,
    margin:'0 auto',
    marginTop:30
  }

})
class ListData extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* <h4>Showing 4 Catgeories</h4> */}
        <h3 className={classes.textFinance}>Finance</h3><br />
        <ul className={classes.ul}>
          <li className={classes.li}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
          <div className={classes.ContainerBtns}>
              <div className={classes.Btn}>
                <Link to='' label="Delete" icon={<DeleteIcon style={{ fontSize: 17 }} />}
                />
              </div>
              <div className={classes.Btn}> <Link to='/new-question' label="Edit" icon={<EditIcon style={{ fontSize: 17 }} />}
              />
              </div>

            </div>
          </li>
          <li className={classes.li}>
            
Ipsum of Lorem Ipsum used since the 1500s is reproduced below for those interested ?
          <div className={classes.ContainerBtns}>
              <div className={classes.Btn}>
                <Link to='' label="Delete" icon={<DeleteIcon style={{ fontSize: 17 }} />}
                />
              </div>
              <div className={classes.Btn}> <Link to='/new-question' label="Edit" icon={<EditIcon style={{ fontSize: 17 }} />}
              />
              </div>

            </div>
          </li>
          <li className={classes.li}>
           
Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus?
          <div className={classes.ContainerBtns}>
              <div className={classes.Btn}>
                <Link to='' label="Delete" icon={<DeleteIcon style={{ fontSize: 17 }} />}
                />
              </div>
              <div className={classes.Btn}> <Link to='/new-question' label="Edit" icon={<EditIcon style={{ fontSize: 17 }} />}
              />
              </div>

            </div>
          </li>
          <li className={classes.li}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
          <div className={classes.ContainerBtns}>
              <div className={classes.Btn}>
                <Link to='' label="Delete" icon={<DeleteIcon style={{ fontSize: 17 }} />}
                />
              </div>
              <div className={classes.Btn}> <Link to='/new-question' label="Edit" icon={<EditIcon style={{ fontSize: 17 }} />}
              />
              </div>

            </div>
          </li>
          <li className={classes.li}>
            
Ipsum of Lorem Ipsum used since the 1500s is reproduced below for those interested ?
          <div className={classes.ContainerBtns}>
              <div className={classes.Btn}>
                <Link to='' label="Delete" icon={<DeleteIcon style={{ fontSize: 17 }} />}
                />
              </div>
              <div className={classes.Btn}> <Link to='/new-question' label="Edit" icon={<EditIcon style={{ fontSize: 17 }} />}
              />
              </div>

            </div>
          </li>
          <li className={classes.li}>
           
Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus?
          <div className={classes.ContainerBtns}>
              <div className={classes.Btn}>
                <Link to='' label="Delete" icon={<DeleteIcon style={{ fontSize: 17 }} />}
                />
              </div>
              <div className={classes.Btn}> <Link to='' label="Edit" icon={<EditIcon style={{ fontSize: 17 }} />}
              />
              </div>

            </div>
          </li>
        </ul>
        <div className={classes.AddBtn}>
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
            fontSize: "18px"
        }}
          // disabled={invalid || loading}
        >
          Add New Question 
        </Button>
        </div>
      </div>
    );
  }
}

export default (withStyles(useStyles)(ListData));
