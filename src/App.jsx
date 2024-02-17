import { useState } from 'react'
import './App.css'
import { Note } from './components/Note/Note';
import add from './assets/Notenote_template.png'
import { Display } from './components/Display/Display';
import { Adding } from './components/Adding/Adding';
function App() {

  const [myNotes, setMyNotes] = useState([]);

  const [current, setCurrent] = useState(1);

  const handleSelect = (note) => {
    setCurrent(note)
  }

  const handleAdd = () => {
    setCurrent(-1);
  }

  const addNote = (noteObj) => {
    setMyNotes([...myNotes, {
      ...noteObj,
      id: myNotes.length + 1,
      liked: false,
      date: new Date()
    }])
    setCurrent(1)
  }

  

  const sortedNote = [...myNotes].sort((a, b) => { return b.date.getTime() - a.date.getTime() })
  const liked = [...sortedNote].filter(note => note.liked)
  const notLiked = [...sortedNote].filter(note => !note.liked)

  const notesElementsLiked = liked.map((note, i) => {
    return <Note setMyNotes={setMyNotes} note={note} notes={[...myNotes]} key={i} handleSelect={handleSelect} />
  });

  const notesElementsNotLiked = notLiked.map((note, i) => {
    return <Note setMyNotes={setMyNotes} note={note} notes={[...myNotes]} key={i} handleSelect={handleSelect} />
  });

  return (
    <div className="app-container">
      <div className='notes'>
        <img className='img-add' src={add} onClick={handleAdd} />
        {notesElementsLiked}
        <div className='limit'>

        </div>
        {notesElementsNotLiked}
      </div>
      <div className="display">
        {current === -1 ? <Adding addNote={addNote} /> : <Display current={current} />}

      </div>
    </div>
  )
}

export default App
