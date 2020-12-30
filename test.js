
function pretty(string){
    let col = {}
    for (let i = 0 ; i <string.length; i++){
        let pointer = string[i]
        if(!col[pointer]){col[pointer]=1}
        else{
            col[pointer] ++
        }
    }
    console.log(col[0])
}

pretty('aabbbbc')