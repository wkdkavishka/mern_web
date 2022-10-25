const NoteView = ({note}) => { // {notes} // deconstruct
    return (
        <div className="note-details">
            
            <h4><strong>{note.name}</strong></h4>
            <p>{note.content}</p>
        </div>
    )
}


export default NoteView 