
const NoteItem = ({note}) => {

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }

  return (
    <div className="note-item">
        <div className="note-item__header">
            <div>
                <p className="title">{note.title}</p>
                <p className="desc">{note.description}</p>
            </div>
            <div className="actions">
                <button>delete</button>
                <input type="checkbox" />
            </div>
        </div>
        <div className="note-item__footer">
            {new Date(note.createdAt).toLocaleDateString("en-US", options)}
        </div>
    </div>
  )
}

export default NoteItem