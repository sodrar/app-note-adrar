import { useState } from "react"
import './Adding.css'

export function Adding({addNote}) {

    const [titre,setTitre] = useState("Titre")
    const handleTitreInput = e => {
        setTitre(e.target.value)
    }

    const [contenu,setContenu] = useState("Rentrez votre note ici")
    const handleContenuInput = e => {
        setContenu(e.target.value)
    }

    const handleSubmit = () => {
        addNote({
            title: titre,
            content: contenu
        })
    }

    return (
        <div className="add-container">
            <input className="titre" type="text" value={titre} onInput={handleTitreInput}/>
            <textarea className="contenu" type="text" value={contenu} onInput={handleContenuInput}></textarea>
            <button className="ajout" onClick={handleSubmit} >Ajouter</button>
        </div>
    )
}