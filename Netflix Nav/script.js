const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
console.log(nav)

open_btn.addEventListener('click',()=>{
    nav.forEach(navEl=>navEl.classList.add('visible'))
})
close_btn.addEventListener('click',()=>{
    nav.forEach(navEl=>navEl.classList.remove('visible'))
})