const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return 'Your notes...';
}

const readNote = (title) => {
    const notes = loadNotes();
    const data = notes.find((note) => note.title === title );
    if(data){
        console.log(data.title);
    }else{
        console.log(chalk.red.inverse('Note not found'));
    }
} 

const listNote = () =>{
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    });
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);
    debugger
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
    }else{
        console.log("There is a duplicate");
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title != title);
    if(notes.length == notesToKeep.length){
        console.log(chalk.red.inverse("No Note found"));
    }else{
        console.log(chalk.yellow.inverse("Note found"));
    }
    saveNotes(notesToKeep)
}

const saveNotes = (notes) => {
const dataJson = JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJson);
}

const loadNotes = () => {
    try{
   const dataBuffer = fs.readFileSync('notes.json');
   const dataJson = dataBuffer.toString();
   return JSON.parse(dataJson);
    }catch(e){
        return [];
    }
}
module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNote : listNote,
    readNote : readNote    
};