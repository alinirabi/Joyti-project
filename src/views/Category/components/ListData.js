import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '../../../components/Link';
import Colors from '../../../common/Colors';
import { colors } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



const useStyles = theme => ({
  root: {
    minHeight: '70vh',
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: theme.spacing(2)
  },
  ul: {
    margin: 0,
    padding: 0,
    width:'100%'
  },
  li: {
    listStyle: 'none',
    padding: 0,
    float:'left',
    width:'25%',
    padding:10,
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]:{
      width:'100%',
    }
  },
  img: {
    width: '100%',
    float:'left',
    borderRadius: '8px 8px 0 0 ',
  },
  datacontent: {
    backgroundColor: Colors.DarkBlue,
    overflow: 'hidden', float:'left',width:'100%',
    borderRadius: '0 0 8px 8px',
  },
  title: {
    color: Colors.White,
    textAlign: 'center',
    height: 42,
    verticalAlign: 'middle',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  topSec:{
   borderBottom:`solid thin ${Colors.DarkGray}`
  },
  left: {
    width: '50%', float: 'left',
    borderRight:`solid thin ${Colors.DarkGray}`,
    boxSizing: 'border-box'
  },
  right:{
    width: '50%', float: 'right',
    boxSizing: 'border-box'
  }

})
class ListData extends React.Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <h4>Showing 4 Catgeories</h4><br />
        <ul className={classes.ul}>
          <li className={classes.li}>
            <img src={'/images/data/Untitled-3_03.png'}
              className={classes.img}
            />
            <div className={classes.datacontent}>
              <div className={classes.topSec}>
                <h3 className={classes.title}>Dating/Relationships Parent</h3>
              </div>
              <div>
                <div className={classes.left}>
                  <Link to='/edit-category' label="Edit" style={classes.logoutBtn} icon={<EditIcon style={{ fontSize: 17 }} />}
                  />
                </div>
                <div className={classes.right}>
                  <Link to='/new-category' label="Add New" style={classes.logoutBtn} icon={<AddCircleOutlineIcon style={{ fontSize: 17 }} />} />
                </div>

              </div>
            </div>
          </li>
          <li className={classes.li}>
            <img src={'/images/data/Untitled-3_03.png'}
              className={classes.img}
            />
            <div className={classes.datacontent}>
              <div className={classes.topSec}>
                <h3 className={classes.title}>Dating/Relationships Parent</h3>
              </div>
              <div>
                <div className={classes.left}>
                  <Link to='/edit-category' label="Edit" style={classes.logoutBtn} icon={<EditIcon style={{ fontSize: 17 }} />}
                  />
                </div>
                <div className={classes.right}>
                  <Link to='/new-category' label="Add New" style={classes.logoutBtn} icon={<AddCircleOutlineIcon style={{ fontSize: 17 }} />} />
                </div>

              </div>
            </div>
          </li>
          <li className={classes.li}>
            <img src={'/images/data/Untitled-3_03.png'}
              className={classes.img}
            />
            <div className={classes.datacontent}>
              <div className={classes.topSec}>
                <h3 className={classes.title}>Dating/Relationships Parent</h3>
              </div>
              <div>
                <div className={classes.left}>
                  <Link to='/edit-category' label="Edit" style={classes.logoutBtn} icon={<EditIcon style={{ fontSize: 17 }} />}
                  />
                </div>
                <div className={classes.right}>
                  <Link to='/new-category' label="Add New" style={classes.logoutBtn} icon={<AddCircleOutlineIcon style={{ fontSize: 17 }} />} />
                </div>

              </div>
            </div>
          </li>
          <li className={classes.li}>
            <img src={'/images/data/Untitled-3_03.png'}
              className={classes.img}
            />
            <div className={classes.datacontent}>
              <div className={classes.topSec}>
                <h3 className={classes.title}>Dating/Relationships Parent</h3>
              </div>
              <div>
                <div className={classes.left}>
                  <Link to='/edit-category' label="Edit" style={classes.logoutBtn} icon={<EditIcon style={{ fontSize: 17 }} />}
                  />
                </div>
                <div className={classes.right}>
                  <Link to='/new-category' label="Add New" style={classes.logoutBtn} icon={<AddCircleOutlineIcon style={{ fontSize: 17 }} />} />
                </div>

              </div>
            </div>
          </li>
          
        </ul>
      </div>
    );
  }
}

export default (withStyles(useStyles)(ListData));
