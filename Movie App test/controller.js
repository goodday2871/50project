require('dotenv').config()

const KEY = process.env.API_KEY

console.log(KEY)

const axios = require('axios')
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query="`

const getMovie=async (url)=>{
    try{
        const get = await axios.get(url)
        console.log(get.data.results)
    }catch(err){
        console.log(err)
    }
}
getMovie(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}`)