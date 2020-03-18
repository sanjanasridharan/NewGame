import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import {CheckStatus} from '../context/CheckStatus'
 
const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    outline: 0,
    position: 'relative',
    height : 520,
    width: 435,
    backgroundImage : "url(https://pngimg.com/uploads/ironman/ironman_PNG44.png)",
    backgroundSize:'contain',
  },
  reward: {
    color : "#da1f28",
    fontSize : 40,
    textAlign:'center',
    marginTop : '80%',
  },
  rewardbutton:{
    backgroundColor : "#000000",
    color : "#da1f28",
    marginLeft:'36.5%',
    marginBottom : 50,
  }
});
 
export default function SimpleModal() {
  const classes = useStyles();
  const user = useContext(CheckStatus)
    const open=user.open
    var cl=user.currentLevel
    const callfunc = () => {
      user.handleChange()
      user.afterModal(cl+1)
    };
  
  return (
    <div>
      <Modal aria-labelledby="simple-modal-title" open={open} className={classes.modal} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 800}}>
        <Fade in={open}>
          <div className={classes.paper}>
            <h1 className={classes.reward}><b>{user.currentLevel*10}</b></h1>
            <audio src={require('../assets/songs.mp3')} autoPlay/>
            <Button onClick={callfunc} className={classes.rewardbutton}><b>Collect Your Reward</b></Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}