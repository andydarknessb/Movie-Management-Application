import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const movie = useSelector((store) => store.selectedMovie || {});

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id });
    }, [id]);

    const goBackToList = () => {
        history.push('/');
    };


    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p>
            <ul>
                {movie.genres && movie.genres.map((genre, index) => (
                    <li key={index}>{genre.name}</li>
                ))}
            </ul>
            <button onClick={goBackToList}>Back to list</button>
        </div>
    );
}

export default MovieDetails;