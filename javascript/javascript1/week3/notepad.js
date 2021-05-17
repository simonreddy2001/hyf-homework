const notes = [];

function saveNote(content, id) {
    let obj ={content: content, id: id }
  notes.push(obj)
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
    for(let i = 0;i < notes.length; i++)
    {
        if(notes[i].id === id)
        {
            return notes[i];
        }
    }
  }
  
  const firstNote = getNote(1);
  console.log(firstNote); // {content: 'Pick up groceries', id: 1}

  function logOutNotesFormatted() {
    for(let i = 0;i < notes.length; i++)
    {
        console.log(notes[i])
    }
  }
  
  logOutNotesFormatted(); // should log out the text below
  
  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry