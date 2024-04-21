
import NoteItem from "./NoteItem"

const NoteList = ({nots}) => {
  return (
    <div className="note-list">
        {
            nots.map((note) => <NoteItem key={note.id} note={note} />)
        }
    </div>
  )
}

export default NoteList