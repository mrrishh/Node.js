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
        notes.logNote(note);
    }
    else{
        console.log('Note already taken');
    }
}else if(command==='read'){
    var note= notes.readNote(argv.title);
    if(note){
        console.log('Reading Note!');
        notes.logNote(note);
    }
    else{
        console.log('Note not found');
    }
}else if(command==='list'){
    var allNotes = notes.getAllNotes();
    for(var title in allNotes){
    console.log(`Title: ${allNotes[title].title}`);
    console.log(`Body: ${allNotes[title].body}`);
    console.log('-----------------')
    }
}else if(command==='remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was Removed' : 'Note not found';
    console.log(message);
}else{
    console.log('Command not Recognized');
}