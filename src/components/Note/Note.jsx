import { useEffect } from 'react'
import './Note.css'

export function Note({ note, setMyNotes, notes, handleSelect }) {

    const handleLike = () => {
        const filtered = notes.filter(n => note.id != n.id)
        note.liked = !note.liked
        note.date = new Date()
        setMyNotes([...filtered, note])
    }

    return (
        <div className="note" onClick={() => { handleSelect(note) }}>
            <div className="title-like">
                <h3>{note.title}</h3>
                <button className='liked' onClick={handleLike} >{note.liked ? "❤️" : "💔"}</button>
            </div>
            <p className='note-content'>
                {note.content}
            </p>
        </div>
    )
}