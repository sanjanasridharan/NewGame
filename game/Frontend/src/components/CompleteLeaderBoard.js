import React,{useContext,useEffect,useState} from 'react'
import GlobalLeaderBoard from './GlobalLeaderBoard'
import GroupLeaderBoard from './GroupLeaderBoard'
import '../CompleteLeaderBoard.css'
import NavBar from './NavBar'
import axios from 'axios'
// let reward
function CompleteLeaderBoard() {
    const [reward,setreward]=useState([])
    useEffect(() => {
      getReward()
        console.log(reward)
    }, [])
    const getReward = async ()=>{
             const response=await axios.get('http://localhost:5000/data/getRewardPoints')
               setreward(response.data)
            // console.log(reward[0].rewardpoints)  
    }
  
    return (
       <div>
          <NavBar></NavBar>
          {/* <h1>{reward[0].rewardpoints}</h1> */}
            <div className="wrapper1" >
                <div className="boxx1">
                    <center>
                    <h2>Global Ranking</h2>
                    </center>
                    
                    <GlobalLeaderBoard props={reward}/>
                   
                </div>
                <div className="boxx2">
                    <center><h2>Group Ranking</h2></center>
                    <h1>  </h1>
                    <GroupLeaderBoard props={reward}/>
                </div>
                
                </div>
                </div>
       
    )
}

export default CompleteLeaderBoard