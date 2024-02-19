// Q3. Write a program that takes an object as input and return the number of properties it has.

let sampleObj = {
    name: 'Sunil',
    age: 32,
    gender: 'male',
    state: 'Karnataka',
    country: 'India'
}

function countProperty(obj){
    // let numOfProperty = ''
    // for(const property in obj){
    //     numOfProperty++
    // }
    // console.log(numOfProperty);

    //      OR

    return Object.keys(obj).length
}

console.log(countProperty(sampleObj))