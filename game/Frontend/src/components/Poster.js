import React from 'react'
import '../Poster.css'

function Poster({props}) {
    return (
        <div>
    	    <div id="container-movies">
                <div className="container-movie">
                    <div className="movie">
                        <div className="movie-inside front">
                            <img style={{width:260,height:400}} src={props.poster}/>
                        </div>
                        <div className="movie-inside back">
                            <div className="movie-details">
                                <div className="movie-snap">
                                    <img style={{width:240,height:139}}src={props.secPoster}/>
                                </div>
                                <div>
                                    <h1 style={{textAlign:'center'}}>{props.name}</h1>
                                    <h4>{props.year}</h4>
                                </div>
                                <ul className="movie-tags">
                                    <li>Action</li>
                                    <li>Thriller</li>
                                    <li>Fantasy</li>
                                </ul>
                                <p style={{color:'#000000'}}className="movie-synopsis">{props.des}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poster