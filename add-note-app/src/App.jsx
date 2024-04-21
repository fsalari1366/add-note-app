import { useState } from 'react'
import AddNewNote from './components/AddNewNote'
import NoteList from './components/NoteList';
import './App.css'

function App() {
  const [nots, setNots] = useState([]);

  const handleAddNots = (newNote) => {
    setNots((prevNots) => [...prevNots, newNote])
  }

  return (
    <div className="container">
        <div className='note-header'>note header</div>
        <div className="note-app">
          <AddNewNote onAddNots={handleAddNots} />
          <div className="note-container">
            <NoteList nots={nots} />
          </div>
        </div>
      </div>
  )
}

export default App
