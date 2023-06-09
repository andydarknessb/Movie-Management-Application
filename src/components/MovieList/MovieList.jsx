import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Link } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.moviesList.list);

    

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
          <h1>Movie List</h1>
          <section className="movies">
            {movies.map((movie) => {
              return (
                <div key={movie.id}>
                  <div className="movie-info">
                  <h3>{movie.title}</h3>
                  
                  </div>
                  <Link to={`/details/${movie.id}`}>
                    <img src={movie.poster} alt={movie.title} />
                  </Link>
                </div>
              );
            })}
          </section>
        </main>
      );
    }
    
    export default MovieList;