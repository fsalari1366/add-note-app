import { useState } from 'react'
import AddNewNote from './components/AddNewNote'
import NoteList from './components/NoteList';
import './App.css'
import NoteStatus from './components/NoteStatus';
import NoteHeader from './components/NoteHeader';

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote])
  }

  const handleDeleteNote = (id) => {
     setNotes(prevNotes => prevNotes.filter((n) => n.id != id ))
  }

  const handleCheck = (e) => {
    const noteId = Number(e.target.value);
    setNotes((prevNotes) => prevNotes.map((note) => 
     note.id === noteId ? { ...note, completed: !note.completed } : note
     ));
  }


  return (
    <div className="container">
      <NoteHeader notes={notes} sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote onAddNotes={handleAddNotes} />
          <div className="note-container">
            <NoteStatus notes={notes} />
            <NoteList notes={notes}
            sortBy={sortBy}
             onDelete={handleDeleteNote}
              onCheck={handleCheck} />
          </div>
        </div>
      </div>
  )
}

export default App
