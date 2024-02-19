// Q6. Create a function that takes a string as input and return the string reversed using sting manipulation techniques.

let str = 'Reverse Me'

function reserveStr(string){
    let splitString = string.split("")

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("")
    
    return joinArray
}

console.log(reserveStr(str));