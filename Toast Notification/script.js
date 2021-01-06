const button = document.querySelector('.btn')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

const type = [
    'success',
    'info',
    'error'
]

const createNotification = (msg=null, type=null)=>{
    const notif = document.createElement('div');
    let timeout;

    notif.classList.add('toast')
    notif.innerHTML = msg ? msg : getRandomMessage()
    notif.classList.add(type ? type : getRandomType())
    notif.classList.add('fade')
    toasts.appendChild(notif)


    notif.addEventListener('mouseenter', ()=>{
        notif.classList.remove('fade')
        clearTimeout(timeout)
    })
    notif.addEventListener('mouseleave', ()=>{
        notif.classList.add('fade')
        timeout = setTimeout(()=>{
            notif.remove()
        },3000)
    })

    timeout = setTimeout(() => {
    notif.remove()
    }, 3000);
}

const getRandomMessage = ()=>{
    return messages[Math.floor(Math.random()*messages.length)]
}
const getRandomType = ()=>{
    return type[Math.floor(Math.random() *type .length)]
}


button.addEventListener('click', ()=>{
    createNotification()
} )


