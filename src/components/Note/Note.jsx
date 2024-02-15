import { useEffect } from 'react'
import './Note.css'

export function Note({ note, setMyNotes, notes, handleSelect }) {

    const handleLike = () => {
        const filtered = notes.filter(n => note.id != n)
        if (note.liked === true) {
            note.liked = false
        } else {
            note.liked = true
        }
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