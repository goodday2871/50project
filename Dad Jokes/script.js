const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

const getJoke = async()=>{
    const fetchConfig = {
        headers:{
            'Accept': 'application/json'
        }
    }

   let res = await fetch(' https://icanhazdadjoke.com/', fetchConfig)
   const data = await res.json()
   jokeEl.innerHTML = data.joke 
}

jokeBtn.addEventListener('click', ()=>{
    getJoke()
})