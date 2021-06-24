console.log('Starting app.js!!');

const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js'); //Requiring your own file

const argv = yargs.argv;
var command = argv._[0];
console.log('Yargs Command:', command);

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note Created!');
        console.log('---------------');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }
    else{
        console.log('Note already taken');
    }
}else if(command==='read'){
    notes.readNote(argv.title);
}else if(command==='list'){
    notes.getAllNotes();
}else if(command==='remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was Removed' : 'Note not found';
    console.log(message);
}else{
    console.log('Command not Recognized');
}