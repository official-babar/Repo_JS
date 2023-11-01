//Types of Memory in Javascript

//Two types of Memory

// 1. Stack Memory (Primitive Datatypes)
// 2. Heap Memory  (Non-Primitive Datatypes)

//Example of Stack Memory (Primitive DataTpyes)
let myName = "Babar Ali";  // String
let age  = 30;   // Number
// console.log(myName);
// console.log(age);

let myNickName = myName;
myNickName = "Babu";
// console.log(myNickName);
// console.log(myName)


// Example of Heap Memory (Non-Primitive DataTypes)

studentData = {
        stdName : "Babar Ali",
        stdID : 538,
        stdCourse : "JavaScript Developer",
        stdBatch : "FA13",
}
let newStudent = studentData;
newStudent.stdName = "Bilal Farooq";
console.log(newStudent);
console.log(studentData);