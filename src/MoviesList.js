import React from 'react'
import MovieCard from './MovieCard'
const MoviesList = (props) => {
    return (
      <div className="container" > 
       <div className="flex">   
            {props.movies.map(movie => <div className="item">
            <MovieCard movie={movie}/></div> )}
        </div>
      </div> 
    )}
export default MoviesList
