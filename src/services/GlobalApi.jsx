import axios from "axios";
const movieBaseUrl = "https://api.themoviedb.org/3"
//https://api.themoviedb.org/3/trending/all/day?api_key=cdd2d5e1442f2be4b40c19549de32888
const api_key = "cdd2d5e1442f2be4b40c19549de32888"

const getByGenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=cdd2d5e1442f2be4b40c19549de32888';

const getTrending = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
const getMovieByGenreId = (id) =>
    axios.get(getByGenreBaseUrl+"&with_genres="+id)

export default {
    getTrending,
    getMovieByGenreId
}