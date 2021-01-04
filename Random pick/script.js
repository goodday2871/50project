const textarea = document.getElementById('textarea')
const tagsEl = document.getElementById('tags')

textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value=''
        }, 10);
        randomChoice()
    }
})


const createTags = (input)=>{
    const tags = input
    .split(',')
    .filter(tag=>tag.trim()!=='')
    .map(tag=>tag.trim())
    tagsEl.innerHTML=''
    tags.forEach(tag=>{
        const tagEl = document.createElement('span')
        tagEl.textContent=tag
        tagEl.classList.add('tag')
        tagsEl.appendChild(tagEl)
    }) 
}

const randomChoice = ()=>{
    const times = 30
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
       setTimeout(() => {
        const finalTag = pickRandomTag()
        highlightTag(finalTag)
       }, 100);
    }, times*100);
}

const pickRandomTag = ()=>{
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

const highlightTag = (tag)=>{
    tag.classList.add('highlight')
}

const unHighlightTag = (tag)=>{
    tag.classList.remove('highlight')
}