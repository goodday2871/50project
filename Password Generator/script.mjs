import *as random from './random.mjs'
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

// short cut
const randomFunc = {
    upper:random.getRandomUpper,
    lower:random.getRandomLower,
    number:random.getRandomNumber,
    symbol:random.getRandomSymbol
}

//get generate config
generateEl.addEventListener('click',()=>{
    const length = lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
    resultEl.innerText = generatePassword(hasUpper,hasLower,hasNumber,hasSymbol,length)
})

//generate

const generatePassword = (upper, lower, number, symbol, length)=>{
    let password = ''
    const typesCount = upper + lower + number + symbol
    const typesArr = [{upper},{lower},{number},{symbol}].filter(item=>Object.values(item)[0])
    if(typesCount ===0){
        return ''
    }
    for(let i = 0 ; i<length; i+=typesCount){
        typesArr.forEach(type=>{
            const funcName = Object.keys(type)[0]
            password += randomFunc[funcName]()
        })
    }

    const finalPassword = password.split('').sort(()=>Math.random()>0.5?1:-1).join('')
    return finalPassword
}   

//copy function

clipboardEl.addEventListener('click',()=>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText
    if(!password){return}
    textarea.value = password 
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')
})