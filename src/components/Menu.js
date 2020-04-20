import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Colors from '../common/Colors';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {history} from  '../common'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} 
      style={{color:Colors.White,backgroundColor:Colors.Green}}>
        <AddCircleOutlineIcon style={{marginRight:5}}/>  Add New  
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={handleClose} style={{width:200}}>
          <a onClick={()=>history.push({pathname:'/new-category'})} style={{width:"100%"}}>Category</a>
          </MenuItem>
        <MenuItem onClick={handleClose} style={{width:200}}>
          <a onClick={()=>history.push({pathname:'/new-question'})} style={{width:"100%"}}>Question</a>
          </MenuItem>
      </Menu>
    </div>
  );
}
