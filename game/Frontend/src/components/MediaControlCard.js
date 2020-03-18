import React,{useContext,useEffect,useRef} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import PostData from '../data/video.json'
import {CheckStatus} from '../context/CheckStatus'
import SimpleModal from './SimpleModal.js';

const useStyles = makeStyles({
  cardMedia: {
    cursor: "pointer",
  },
  root: {
    display: 'flex',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
  },
});

export default function MediaControlCard({props}) {
  let lvl=props
  console.log(lvl)
  const scrollToRef=(ref)=>{window.scrollTo({
    top: 1000,
    left: 100,
    behavior: 'smooth'
  })}
    if(lvl!==0)
   {
      scrollToRef()
   }  
  const classes = useStyles();
  const user = useContext(CheckStatus)
  console.log(user)
  const handleChange=user.handleChange
  const callfunc = () => {
    handleChange()
  };

  return (
    <div>
      <div>
        <SimpleModal/>
      </div>
      <Card className={classes.root}>
        <CardMedia
          id="_2KTV2l"
          className={classes.cardMedia}
          component="video"
          src={require("../"+PostData[lvl].src)}
          controls
          height="640"
          onEnded={callfunc}/>
      </Card>
    </div>
  );
}
