const labels = document.querySelectorAll('label')

labels.forEach(label=>{
    label.innerHTML = label.innerHTML
    .split('')
    .map((letter, idx)=>{
       return `<span style='transition-delay:${idx*70}ms'>${letter}</span>`
    })
    .join('') 
})

