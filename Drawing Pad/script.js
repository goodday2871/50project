const canvas   = document.getElementById('canvas')
const ctx      = canvas.getContext('2d')

const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const sizeEL   = document.getElementById('size')
const colorEl    = document.getElementById('color')
const clear    = document.getElementById('clear')

let size = 10
let color = 'black'
let isPressed = false
let x
let y

canvas.addEventListener('mousedown', (e)=>{
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e)=>{
    isPressed = false
    
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e)=>{
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        
        x= x2
        y = y2
    }
})


function drawCircle (x, y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size*2
    ctx.stroke()
}

decrease.addEventListener('click', ()=>{
    if(size === 5 ){
        size = 5
        alert('the smallest size')
    }else{
    size -= 5
    sizeEL.textContent = size}
})
increase.addEventListener('click', ()=>{
    if(size === 30 ){
        size = 30
        alert('the largest size')
    }else{
    size += 5
    sizeEL.textContent = size}
})

colorEl.addEventListener('change', (e)=>{
    color = e.target.value
})

clear.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})