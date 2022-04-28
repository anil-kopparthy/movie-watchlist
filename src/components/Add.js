import React, { useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const Add = () => {
  const [movieQuery, setMovieQuery] = useState('')
  const [movies, setMovies] = useState([])

  const handleChange = async e => {
    const movieName = e.target.value
    try {
      setMovieQuery(movieName)
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`
      )
      setMovies(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Search for a movie...'
              value={movieQuery}
              onChange={handleChange}
            />
          </div>
          {movies.length > 0 && (
            <ul className='results'>
              {movies.map(movie => (
                <li key={movie.id}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Add
