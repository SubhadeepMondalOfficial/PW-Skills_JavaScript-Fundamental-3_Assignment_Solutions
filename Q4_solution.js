// Q4. Develop a program that accepts an object and a property name, and checks if the object has the specified property.

const sampleObj = {
    name: 'Sakshi',
    gender: 'female',
}

function checkProperty(obj, propertyName){
    return obj.hasOwnProperty(propertyName)
}

console.log(checkProperty(sampleObj, 'name'));
console.log(checkProperty(sampleObj, 'gender'));
console.log(checkProperty(sampleObj, 'roll'));
