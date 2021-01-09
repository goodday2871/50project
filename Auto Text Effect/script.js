const textEL = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming'

let idx = 1
let speed = 300 



const writeText = () =>{
    textEL.innerText = text.slice(0,idx)
    idx++
    if(idx>text.length){
        idx = 0
    }
    setTimeout(writeText, speed);
}

speedEl.addEventListener('change',(e)=>{
    speed = 300 / e.target.value
})

writeText()