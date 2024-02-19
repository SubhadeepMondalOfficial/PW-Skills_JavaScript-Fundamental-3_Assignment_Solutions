// Q2. Define an object that represents a student's information including name, age, and grade. Implement a method to update the student's grade.

let studentInfo = {
    name: 'Berlin',
    age: 14,
    grade: 'B'
}
function updateGrade(newGrade){
    studentInfo.grade = newGrade;
}

updateGrade('A')
console.log(studentInfo);

