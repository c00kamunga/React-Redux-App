import axios from 'axios';

export const FETCH_FILMS_START = 'FETCH_FILMS_START';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_FAIL= 'FETCH_FILMS_FAIL';


export const getFilms = () => dispatch => {
    dispatch({ type: FETCH_FILMS_START});
    axios
    .get(`https://ghibliapi.herokuapp.com/#tag/Films`)
    .then(res =>{
        dispatch({ type: FETCH_FILMS_SUCCESS, payload: res.data.results})
    })
    .catch(err => dispatch ({ type: FETCH_FILMS_FAIL, payoad: err}))
}