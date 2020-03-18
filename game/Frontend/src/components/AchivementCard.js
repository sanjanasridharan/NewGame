import React,{useContext,useState,useEffect,useMemo}from 'react';
import Card from '@material-ui/core/Card';
import '../AchivementCard.css'
import { CheckStatus } from '../context/CheckStatus'

export default function AchivementCard() {
  const user = useContext(CheckStatus) 
  const [badgeList,setBadgeList]=useState([])
  useEffect( () => {
    // user.getBadgeData()
    // console.log("innn")
    // const d=user.badgeData
    // setBadgeList(d)
    BadgeData()
 
   },[])
   const BadgeData = async ()=> {
    console.log("innn")
       user.getBadgeData()
      
       const d =await user.badgeData
      console.log(d)
      
   }

  // console.log(badgeList)
  let l=user.user.badgesearned.length
  let cl=user.user.collectionswatched.length

  
  let lastId=user.user.badgesearned[l-1]
//   console.log(lastId)
//   console.log(user.badgeData[lastId-1].badgename)

//  let r=badgeList[lastId-1]
//  console.log(r)

  let badgename=user.badgeData[lastId-1].badgename
  let badgeicon=user.badgeData[lastId-1].badgeicon
  
  return (
    <Card>
      <div className='rowC'>
        <div>
          <h2 style={{marginLeft:20}}>Collection Watched</h2>
          <div className="background2">
            <div style={{marginLeft:54}}>
              <h1 style={{paddingTop:40}}>{cl}</h1>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{marginLeft:40}}>Badges Earned</h2>
          <div className="background1" >
            <div style={{marginLeft:49}}>
              <h1 style={{paddingTop:36}}>{l}/6</h1>
            </div>
          </div>
        </div>
        <div>
       <h2 style={{marginLeft:30}}>Last Unlocked: {badgename}</h2>   
          <img style={{marginLeft:45,width:120,height:120}}  src={badgeicon}/>
        </div>
      </div>
    </Card>
  );
}