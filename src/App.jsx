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
    console.log(current)
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

  const sortedNote = [...myNotes].sort((a, b) => { return a.date.getTime() - b.date.getTime() })

  const notesElements = sortedNote.map((note, i) => {
    return <Note setMyNotes={setMyNotes} note={note} notes={[...myNotes]} key={i} handleSelect={handleSelect} />
  });

  return (
    <div className="app-container">
      <div className='notes'>
        <img className='img-add' src={add} onClick={handleAdd} />
        {notesElements}
      </div>
      <div className="display">
        {current === -1 ? <Adding addNote={addNote} /> : <Display current={current} />}

      </div>
    </div>
  )
}

export default App
