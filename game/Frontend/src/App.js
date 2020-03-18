import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Choose from './components/Choose';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage'
import CustomizedTables from './components/LeaderBoard';
import CheckStatusProvider from './context/CheckStatus'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import CompleteLeaderBoard from './components/CompleteLeaderBoard'
function App() {
  return (
    <div id="main" className="app">    
      <CheckStatusProvider>
        <Router> 
          <Switch>
            <Route path="/collect" component={Choose}/>
            <Route path="/leaderboard" component={CompleteLeaderBoard}/>
            <Route path="/Dashboard"  component={Dashboard}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/' component={LoginPage}/>
          </Switch>
        </Router>
      </CheckStatusProvider>
    </div>
  );
}
 

function Leader(){
  return(
    <div>
      <NavBar></NavBar>
      <CustomizedTables/>
    </div>
  )
}
 
export default App;