console.log('Starting notes.js');

var addNote = (title,body) =>{
    console.log('Adding Note with title: ',title, 'having text: ', body );
};

var readNote = (title) =>{
    console.log('Reading Note with title: ',title);
}

var getAllNotes = () =>{
    console.log('Getting All Notes');
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