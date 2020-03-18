import React from 'react'
import StepProgress from './StepProgress'
import NavBar from './NavBar'
function Choose() {
    return (
        <div>
            <NavBar/>
            <h1 style={{fontFamily:'sans-serif',color:'white',fontSize:44}}><center>Choose Watch Collect</center></h1>
            <StepProgress/>
        </div>
    )
}

export default Choose