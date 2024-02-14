import './Note.css'

export function Note({note}) {
    return (
        <div className="note">
            <div className="title-like">
                <h3>{note.title}</h3>
                <span className='liked'>❤️</span>
            </div>
            <p className='note-content'>
                {note.content}
            </p>
        </div>
    )
}