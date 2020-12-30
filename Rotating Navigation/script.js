const opened = document.getElementById('open')
const closed = document.getElementById('close')
const container = document.querySelector('.container')
const circle = document.querySelector('.circle')

opened.addEventListener('click', () => {
    container.classList.add('show-nav')
    circle.classList.add('show-nav')

})
closed.addEventListener('click', () => {
    container.classList.remove('show-nav')
    circle.classList.remove('show-nav')
})