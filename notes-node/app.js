console.log('Starting app.js!!');

const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');
const { argv } = require('process');

const notes = require('./notes.js'); //Requiring your own file

var com = yargs.argv;
var command = process.argv[2];
console.log('Yargs Command:', com);

if(command === 'add'){
    console.log(com.title);
    notes.addNote(com.title, com.body);
}else if(command==='read'){
    notes.readNote(com.title);
}else if(command==='list'){
    notes.getAllNotes();
}else if(command==='remove'){
    notes.removeNote(com.title);
}else{
    console.log('Command not Recognized');
}