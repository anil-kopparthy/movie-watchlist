import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchList,
    addMovieToWatched,
    addMovieBackToWatchlist,
    removeFromWatched
  } = useContext(GlobalContext)
  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
          <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
            <i className='fa-fw far fa-eye'></i>
          </button>
          <button
            className='ctrl-btn'
            onClick={() => removeMovieFromWatchList(movie.id)}
          >
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
      {type === 'watched' && (
        <>
          <button
            className='ctrl-btn'
            onClick={() => addMovieBackToWatchlist(movie)}
          >
            <i className='fa-fw far fa-eye-slash'></i>
          </button>
          <button
            className='ctrl-btn'
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
    </div>
  )
}

export default MovieControls
