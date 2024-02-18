import { useState } from "react"
import './Adding.css'

export function Adding({addNote}) {

    const [titre,setTitre] = useState("")
    const handleTitreInput = e => {
        setTitre(e.target.value)
    }

    const [contenu,setContenu] = useState("")
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
            <input className="titre" type="text" value={titre} onInput={handleTitreInput} placeholder="Titre"/>
            <textarea className="contenu" type="text" value={contenu} placeholder="Rentrez votre note ici" onInput={handleContenuInput}></textarea>
            <button className="ajout" onClick={handleSubmit} >Ajouter</button>
        </div>
    )
}