console.log('Starting app.js!!');

const fs = require('fs');
const _  = require('lodash');
const { title } = require('process');
const yargs = require('yargs');


const notes = require('./notes.js'); //Requiring your own file

titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};

bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};


const argv = yargs
    .command('add','Add a new note',{
        title: titleOptions,
        body:bodyOptions
    })
    .command('read','Read a note',{
        title: titleOptions
    })
    .command('list','List all notes')
    .command('remove','Remove a note',{
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];



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
    console.log(`Printing ${allNotes.length} Note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command==='remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was Removed' : 'Note not found';
    console.log(message);
}else{
    console.log('Command not Recognized');
}