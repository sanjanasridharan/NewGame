import React from 'react'
import LoginContents from './LoginContents'
import '../Login.css'

export default function LoginPage() {
    return (
      <div className="Login">
        <img src={require('../assets/astroLogo.png')} style={{marginTop:9,marginLeft:60}}></img>
          <div style={{marginRight:1145,marginTop:120}}>
            <LoginContents></LoginContents>
          </div>
       </div>
    )
}


