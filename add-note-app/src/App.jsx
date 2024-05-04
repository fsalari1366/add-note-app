import { useReducer, useState } from 'react'
import AddNewNote from './components/AddNewNote'
import NoteList from './components/NoteList';
import './App.css'
import NoteStatus from './components/NoteStatus';
import NoteHeader from './components/NoteHeader';

function noteReducer(state, {type, payload}) {
switch(type) {
   case "ADD": {
     return [...state, payload]
   }
   case "DELETE": {
     return state.filter((s) => s.id != payload )
   }
   case "CHECK": {
     return state.map((note) => 
        note.id === payload ? { ...note, completed: !note.completed } : note
        )
   }
   default:
    throw new Error("unknown error" + type)
}
}

function App() {
  const [sortBy, setSortBy] = useState("latest");

  const [notes, dispatch] = useReducer(noteReducer, []);

  const handleAddNotes = (newNote) => {
    dispatch({ type: "ADD", payload: newNote });
  }

  const handleDeleteNote = (id) => {
    dispatch({ type: "DELETE", payload: id });
  }

  const handleCheck = (e) => {
    const noteId = Number(e.target.value);
    dispatch({ type: "CHECK", payload: noteId});
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
