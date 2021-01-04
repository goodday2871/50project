const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const partials = require('express-partials');
const axios = require('axios');
var multer  = require('multer')
var upload = multer()

require('dotenv').config()
const KEY = process.env.API_KEY


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));;
app.use(bodyParser.json());
app.use(partials());
app.use(express.static(__dirname + '/public'))

app.get('/', async (req,res)=>{
    const data = await getMovie(API_URL)
    res.render('index.ejs', {data:data})
})

app.get('/search', upload.array(), async(req, res)=>{
    const data = await getMovie(`${SEARCH_API}${req.query.search}"`)
    res.render('index.ejs',{data:data})
})




// get movie

const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`


const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query="`

const getMovie=async (url)=>{
    try{
        const get = await axios.get(url)
        return get.data.results
    }catch(err){
        console.log(err)
    }
}

const port = process.env.port || 5500
app.listen(port)
console.log('start on port' + port)