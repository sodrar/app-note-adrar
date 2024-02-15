import { useState } from "react"
import './Adding.css'

export function Adding() {

    const [titre,setTitre] = useState("Titre")
    const handleTitreInput = e => {
        setTitre(e.target.value)
    }

    const [contenu,setContenu] = useState("Rentrez votre note ici")
    const handleContenuInput = e => {
        setContenu(e.target.value)
    }

    return (
        <div className="add-container">
            <input className="titre" type="text" value={titre} onInput={handleTitreInput}/>
            <textarea className="contenu" type="text" value={contenu} onInput={handleContenuInput}></textarea>
            <button className="ajout">Ajouter</button>
        </div>
    )
}