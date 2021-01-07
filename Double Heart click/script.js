const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let clicked = 0

loveMe.addEventListener('click',(e)=>{
    if(clickTime===0){
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime() - clickTime) < 800){
            createHeart(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e)=>{
    const heart = document.createElement('i')
    
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    
    const insideX = e.clientX - e.target.offsetLeft
    const insideY = e.clientY - e.target.offsetTop

    heart.style.top = `${insideY}px`
    heart.style.left = `${insideX}px`
    

    loveMe.appendChild(heart)

    setTimeout(() => {
        heart.remove()
    }, 1000);
    clicked ++
    times.innerHTML = clicked 
}