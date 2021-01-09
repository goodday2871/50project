const addBtn = document.getElementById('add')

addBtn.addEventListener('click',()=>addNewNote())

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes){
    notes.forEach(note=>{
        addNewNote(note)
    }) 
}


function addNewNote ( text = ''){
    
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML=`
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : "" }"></textarea>
    `
    
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textArea')

    textArea.value = text
    main.innerHTML = marked(text)


    let del = 0
    deleteBtn.addEventListener('click',()=>{
        if(del === 0){
            alert('Your note will be delete. If you sure to do that. Click delete button again')
        }else{
            note.remove()
            updateLs()
        }
        console.log(del)
        del ++
    })

    editBtn.addEventListener('click',()=>{
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input',(e)=>{
        const { value } = e.target
        main.innerHTML = marked(value)
        updateLs()
    })

    document.body.appendChild(note)
}

function updateLs(){
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note=>{
        notes.push(note.value)
    })

    localStorage.setItem('notes', JSON.stringify(notes))
}


