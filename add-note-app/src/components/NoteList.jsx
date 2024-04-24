
import NoteItem from "./NoteItem"

const NoteList = ({notes, onDelete, onCheck, sortBy}) => {

  let sortedNotes = notes;
  if(sortBy === "earliest")
  sortedNotes = [...notes].sort(
(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
);

if(sortBy === "latest")
  sortedNotes = [...notes].sort(
(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
);

if(sortBy === "completed")
  sortedNotes = [...notes].sort(
(a, b) => Number(a.completed) - Number(b.completed));


  return (
    <div className="note-list">
        {
            sortedNotes.map((note) => <NoteItem key={note.id} note={note}
             onDelete={onDelete} onCheck={onCheck} />)
        }
    </div>
  )
}

export default NoteList