import Message from "./Message";


const NoteStatus = ({notes}) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const unCompletedNotes = allNotes - completedNotes;

    if(!allNotes) return <Message>
       <span>No Notes has already been added.</span> <span>🧐</span>
    </Message>

  return (
    <ul className='note-status'>
       <li>
        All<span>{allNotes}</span>
       </li>
       <li>
        completed<span>{completedNotes}</span>
       </li>
       <li>
        open<span>{unCompletedNotes}</span>
       </li>
    </ul>
  )
}

export default NoteStatus