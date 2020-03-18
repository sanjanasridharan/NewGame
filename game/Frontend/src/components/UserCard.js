import React,{useContext}from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import '../User.css'
import { CheckStatus } from '../context/CheckStatus'

export default function UserCard() {
  const user = useContext(CheckStatus) 
  let name=user.user.userid
  return (
    <Paper elevation={0}>
      <Card>
        <CardContent style={{marginTop:10}}>
          <img style={{marginLeft:60}} className="Avatar" src="https://en.onlinesoccermanager.com/images/Icons/avatar_empty.jpg?v=3.99.1"/>
            <h1 style={{float:"right",marginTop:110,marginRight:75}}>{name}</h1>
        </CardContent>
        <CardActions disableSpacing style={{justifyContent:'center'}}>
          <IconButton>
            <FacebookIcon/>
          </IconButton>
          <IconButton>
            <TwitterIcon/>
          </IconButton>
          <IconButton>
            <InstagramIcon/>
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Typography style={{marginLeft:20,marginTop:20}}>
        <CardActions disableSpacing style={{marginLeft:20}}>
          <IconButton >
            <EditIcon style={{marginRight:10,marginBottom:3}}/>Edit Your profile
          </IconButton>
        </CardActions>
        </Typography>
        <CardContent>
          <Typography style={{marginTop:20}}>Stephen William Hawking CH CBE FRS FRSA (8 January 1942 – 14 March 2018) was an English theoretical physicist, cosmologist, and author who was director of research at the Centre for Theoretical Cosmology at the University of Cambridge at the time of his death. He was the Lucasian Professor of Mathematics at the University of Cambridge between 1979 and 2009. Thankyou for your cooperation.</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}