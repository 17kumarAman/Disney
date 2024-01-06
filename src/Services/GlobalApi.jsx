import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = 'c9a810867e07d5e089447be48a46d024'
const getTrendingVideos = axios.get(movieBaseUrl+"trending/all/day?"+api_key)
console.log(getTrendingVideos)
export default {
    getTrendingVideos
}