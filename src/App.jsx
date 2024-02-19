import { useState } from 'react'
import './App.css'
import { Note } from './components/Note/Note';
import add from './assets/Notenote_template.png'
import { Display } from './components/Display/Display';
import { Adding } from './components/Adding/Adding';
function App() {

  const [myNotes, setMyNotes] = useState([]);

  const [current, setCurrent] = useState(-1);

  const [tag,setTag] = useState("")

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
    console.log(myNotes)
    setTag("")
    setCurrent(-1)
  }

  const modifyNote = (data, id) => {
    const tempFilter = myNotes.filter(note => note.id != id)
    setMyNotes([...tempFilter, {
      ...data,
      id: id,
      date: new Date()
    }])

    setCurrent(-1)
  }

  const sortedNote = [...myNotes]
    .sort((a, b) => { return b.date.getTime() - a.date.getTime() })
    .filter(note => note.categorie.includes(tag))
  const liked = [...sortedNote].filter(note => note.liked)
  const notLiked = [...sortedNote].filter(note => !note.liked)

  const notesElementsLiked = liked.map((note, i) => {
    return <Note setMyNotes={setMyNotes} note={note} notes={[...myNotes]} key={i} handleSelect={handleSelect} />
  });

  const notesElementsNotLiked = notLiked.map((note, i) => {
    return <Note setMyNotes={setMyNotes} note={note} notes={[...myNotes]} key={i} handleSelect={handleSelect} />
  });

  function handleDelete(id) {
    const tempFilter = [...myNotes]
      .filter(note => note.id != id)
    setMyNotes([...tempFilter])
    setCurrent(-1)
  }

  return (

    <div>
      <select className="categorieS" name="categorie" onChange={e => { setTag(e.target.value) }}>
        <option value="">Sélectionner catégorie</option>
        <optgroup label="Vie quotidienne">
          <option value="courses-alimentaires">Courses alimentaires</option>
          <option value="taches-menageres">Tâches ménagères</option>
          <option value="bricolage">Bricolage</option>
          <option value="jardinage">Jardinage</option>
          <option value="administration">Administration</option>
        </optgroup>

        <optgroup label="Travail">
          <option value="taches-a-faire">Tâches à faire</option>
          <option value="projets-en-cours">Projets en cours</option>
          <option value="reunions">Réunions</option>
          <option value="notes-de-reunion">Notes de réunion</option>
          <option value="appels-telephoniques">Appels téléphoniques</option>
        </optgroup>

        <optgroup label="Divers">
          <option value="idees">Idées</option>
          <option value="inspirations">Inspirations</option>
          <option value="citations">Citations</option>
          <option value="recettes">Recettes</option>
          <option value="blagues">Blagues</option>
        </optgroup>
      </select>
      <div className="app-container">

        <div className='notes'>
          <img className='img-add' src={add} onClick={handleAdd} />
          {notesElementsLiked}
          <div className='limit'>

          </div>
          {notesElementsNotLiked}
        </div>
        <div className="display">
          {current === -1 ? <Adding addNote={addNote} /> : <Display modifyNote={modifyNote} handleDelete={handleDelete} current={current} />}
        </div>
      </div>
    </div>
  )
}

export default App
