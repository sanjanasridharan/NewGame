import React,{useEffect,useState,useContext,useMemo}  from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import {ThemeProvider} from '@material-ui/core/styles';
import {BadgeTheme} from '../overrides/Theme'
import {CheckStatus} from '../context/CheckStatus'
import "../BadgeDescription.css"
const useStyles1 = makeStyles(theme => ({
    paper: {
      opacity:0.2
    },
}));
  const useStyles2 = makeStyles(theme => ({
    paper: {
      opacity:1
    },
}));
function PrintBadge({badgeList}){ 
    let isNotcomplete
    const user = useContext(CheckStatus)
    let b=user.user.badgesearned
    const classes1 = useStyles1();
    const classes2 = useStyles2();
    const [badgedetails,displaybadgedetails]=useState('')
    const getDetails=()=>{
        badgedetails ? displaybadgedetails('') : displaybadgedetails(badgeList.badgedesc)
    }
    
    if( b.includes(badgeList.badgeid)){
        isNotcomplete=false 
        console.log(b,badgeList.badgeid+"  in false")
    }
    else{
        console.log(b,badgeList.badgeid+"  in true")
        isNotcomplete=true
    }
    
    return (
      <div className="desc">
        <img className = { isNotcomplete ? classes1.paper : classes2.paper } style={{"height":125}} src={badgeList.badgeicon}/>
        <div>
          <p>{badgeList.badgename}</p>
          <p>{badgeList.badgedesc}</p>
        </div>
      </div>
    )
  }

function Badges() {
    const user = useContext(CheckStatus)
    const [data,setBadgedata]=useState([])


    useEffect(() => {
      const d=user.badgeData
      setBadgedata(d)
           },{data})
  
            
    return (   
       
            <div style={{cursor:'pointer'}}>
              <ThemeProvider theme={BadgeTheme}>
                <Stepper  >
                  {data.map((badge) => (
                    <Step key={badge.badgeid}>
                    <PrintBadge badgeList={badge}/>
                    </Step>
                  ))}
                </Stepper> 
              </ThemeProvider>         
        </div>
        
    )
}

export default Badges