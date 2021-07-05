import React from 'react';
import { connect } from 'react-redux';
import { getFilms } from '../actions/actionCreator'



const GhibliMovies = props => {
    const fetchMovies = e => {
        e.preventDefault();
        props.getFilms();
    }
    console.log(props.movies)
    return (
        <>
        <h2>Ghibli Films</h2>
        {props.isFetching && <p>Fetching your movies</p>}
        <div>
            {props.movies.map(movies => (
                <h4 key={movies.url}>{movies.title}</h4>
            ))}
        </div>
        {props.error && <p className="error">{props.error}</p>}
        <button onClick={fetchMovies}>Fetch Movies</button>
        </>
    )
}


const mapStateToProps = state => ({
    movies: state.movies,
    error: state.error,
    isFetching: state.isFetching
})

export default connect(
    mapStateToProps,
    { getFilms }
)(GhibliMovies);




