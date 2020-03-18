import React,{useContext} from 'react'
import UserCard from'./UserCard'
import AchivementCard from './AchivementCard'
import Ranking from './Ranking';
import CollectionTable from './CollectionTable';
import NavBar from './NavBar';
import '../Profile.css'
import Badges from './Badges';

function Profile() {
    
    return (
        <div>
            <NavBar/>
            <div class="wrapper" >
                <div className="box1">
                    <UserCard/>
                </div>
                <div className="box2">
                    <AchivementCard/>
                </div>
                <div className="box3"> 
                    <Ranking/>
                </div>
                <div className="box4">
                    <Badges/>
                </div>
                <div className="box5">
                    <CollectionTable/>
                </div>
            </div>
        </div>       
    )
}

export default Profile