const header        = document.getElementById('header')
const title         = document.getElementById('title')
const excerpt       = document.getElementById('excerpt')
const profile_img   = document.getElementById('profile_img')
const name          = document.getElementById('name')
const date          = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')


function getData(){
    header.innerHTML= `<img
    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
    alt=""
  />`
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, harum.'
    profile_img.innerHTML=`<img src="https://randomuser.me/api/portraits/lego/0.jpg" alt="" />`
    name.innerHTML = 'Steven Wu'
    date.innerHTML = 'Jun 06 , 2021'
    animated_bgs.forEach(animated_bg=>{
        animated_bg.classList.remove('animated-bg')
        
    })
    animated_bgs_texts.forEach(animated_bg_text=>{
        animated_bg_text.classList.remove('animated-bg-text')

    })
}

setTimeout(getData,2000);