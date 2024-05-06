import {useNotesDispatch} from "../context/NotesContext";

const NoteItem = ({note}) => {
    const dispatch = useNotesDispatch();

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }

  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
        <div className="note-item__header">
            <div>
                <p className="title">{note.title}</p>
                <p className="desc">{note.description}</p>
            </div>
            <div className="actions">
                <button onClick={() => dispatch({ type: "DELETE", payload: note.id })}>delete</button>
                <input 
                type="checkbox" 
                name={note.id}
                id={note.id}
                value={note.id}
                checked={note.completed}
                onChange={(e) => {
                      const noteId = Number(e.target.value);
                      dispatch({ type: "CHECK", payload: noteId})}} />
            </div>
        </div>
        <div className="note-item__footer">
            {new Date(note.createdAt).toLocaleDateString("en-US", options)}
        </div>
    </div>
  )
}

export default NoteItem