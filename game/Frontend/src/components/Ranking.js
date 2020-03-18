import React,{useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../Ranking.css'
import Paper from '@material-ui/core/Paper';
import { CheckStatus } from '../context/CheckStatus';
import {useHistory} from "react-router-dom"

export default function Ranking() {
  const history=useHistory();
  const toLeaderboard=()=>{
    history.push("/leaderboard")
  }
  const user = useContext(CheckStatus) 
  return (
    <Paper elevation={3}>
      <Card style={{cursor:'pointer'}} onClick={toLeaderboard}>
        <CardContent>     
          <div style={{justifyContent:"center"}}>
            <img className="media" src="http://icons.iconarchive.com/icons/tatice/operating-systems/256/Globe-icon.png"></img>
            <h2 >Global Ranking</h2>
            <h3 style={{marginLeft:45}}>{user.user.rank}</h3>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
}