import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const MovieCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } =
    useContext(GlobalContext)

  let storedMovie = watchlist.find(x => x.id === movie.id)
  let storedMovieWatched = watched.find(x => x.id === movie.id)

  const watchlistDisabled = storedMovie ? true : false

  const addListDisabled = storedMovieWatched ? true : false

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className='filler-poster'></div>
        )}
      </div>
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release-date'>
            Released year : {''}
            {movie.release_date ? movie.release_date.split('-')[0] : ' -'}
          </h4>
        </div>
        <div className='controls'>
          <button
            onClick={() => addMovieToWatchlist(movie)}
            className='btn'
            disabled={watchlistDisabled}
          >
            Add to Watchlist
          </button>
          <button
            onClick={() => addMovieToWatched(movie)}
            className='btn'
            disabled={addListDisabled}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
