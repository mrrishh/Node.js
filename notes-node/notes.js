console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () =>{
    try{
        var notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
}

var saveNote = (notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
var addNote = (title,body) =>{
    var notes=fetchNotes();
    var note ={
        title,
        body
    }

    //Check for Duplicate Notes
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length===0){
        notes.push(note);
        saveNote(notes);
        return note;
    }
};

var readNote = (title) =>{
    
}

var getAllNotes = () =>{
    return fetchNotes();
}

var removeNote = (title) =>{
    console.log('Removing Note with title: ',title);
}


module.exports={
    addNote,
    readNote,
    getAllNotes,
    removeNote
}