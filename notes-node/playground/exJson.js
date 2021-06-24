var obj = {
    name: "Rishabh",
    job: "Software Engineer"
}

//Coneverting OBJECT to JSON STRING 
var emp = JSON.stringify(obj);
console.log(typeof emp);
console.log(emp);

var empString = '{"name":"Rishabh","job":"Software Engineer"}'

//Coneverting JSON STRING to Object
var empObject = JSON.parse(empString);
console.log(typeof empObject);
console.log(empObject);
console.log(empObject.name);


//Writing JSON string to file 
const fs = require('fs');
var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

//Reading JSON string from file and converting it into OBJECT

var noteString = fs.readFileSync('notes.json');
var noteStringObj = JSON.parse(noteString);
console.log(typeof noteStringObj);
console.log('Title: ', noteStringObj.title);
console.log('Body: ', noteStringObj.body);