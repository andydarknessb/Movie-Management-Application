import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const movie = useSelector((store) => store.selectedMovie);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id });
    }, [id]);

    const goBackToList = () => {
        history.push('/');
    };
}