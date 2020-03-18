import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Link } from "react-router-dom"
 
export default function DropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    <div>
      <li style={{color:'white',textTransform:'none',cursor:'pointer'}} aria-controls="fade-menu" onClick={handleClick}><b>Games</b></li>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
            <Link to="/collect" style={{color:'black'}}>Choose Watch Collect</Link>
            </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to="/collect" style={{color:'black'}}>Weekly Targets</Link>
            </MenuItem>
      </Menu>
    </div>
  );
}