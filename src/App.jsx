import { useState } from 'react'
import './App.css'
import { Note } from './components/Note/Note';
import add from './assets/Notenote_template.png'
import { Display } from './components/Display/Display';
import { Adding } from './components/Adding/Adding';
function App() {

  const [myNotes, setMyNotes] = useState([
    {
      id: 1,
      title: "Note 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      liked: true
    },
    {
      id: 2,
      title: "Note 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      liked: false
    },
    {
      id: 3,
      title: "Note 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      liked: true
    },
    {
      id: 4,
      title: "Note 4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      liked: false
    },
    {
      id: 5,
      title: "Note 5",
      content: "Lorem ipsum dolor sit amet, consectetur aozejhferfhzerifhzerifzehfzeiuhfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      liked: true
    }
  ]);

  const [current, setCurrent] = useState(1);

  const handleSelect = (note) => {
    setCurrent(note)
    console.log(current)
  }

  const notesElements = myNotes.map((note,i) => {
    return <Note setMyNotes={setMyNotes} note={note} notes={[...myNotes]} key={i} handleSelect={handleSelect} />
  });

  const handleAdd = () => {
    setCurrent(-1);
  }

  return (
    <div className="app-container">
      <div className='notes'>
        <img className='img-add' src={add} onClick={handleAdd} />
        {notesElements}
      </div>
      <div className="display">
        {current === -1 ? <Adding /> : <Display current={current} />}
        
      </div>
    </div>
  )
}

export default App
