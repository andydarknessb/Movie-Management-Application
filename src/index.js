import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
     }
    
    }

    function* fetchMovieDetails(action) {
        try{
            const MovieDetails = yield axios.get(`/api/movie/${action.payload}`);
            yield put({ type: 'SET_MOVIE_DETAILS', payload: MovieDetails.data });

            const genres = yield axios.get(`/api/genre/${action.payload}`);
            yield put({ type: 'SET_GENRES', payload: genres.data });

        } catch (error) {
            console.log('Error fetching movie details:', error);
        }

     }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = { list: [], selectedMovie: {genres: [] } }, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return {...state, list: action.payload };
            case 'SET_SELECTED_MOVIE':
                return { ...state, selectedMovie: action.payload };
        default:
            return state;
    }
}

const selectedMovie = (state = {gernres: [ ]}, action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return { ...state, ...action.payload };
            case 'SET_GENRES':
                return { ...state, genres: action.payload };
            default:
                return state;
    }
};

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        moviesList: movies,
        genres,
        selectedMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
