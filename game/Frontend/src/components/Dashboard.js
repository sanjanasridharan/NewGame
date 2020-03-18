import React from 'react'
import NavBar from './NavBar';
import MovieGrid from './MovieGrid';
import Carousel from './Carousel';

function Dashboard() {
    return (
      <div>
        <NavBar></NavBar>
        <Carousel></Carousel>
        <MovieGrid></MovieGrid> 
      </div>
    )
}

export default Dashboard
