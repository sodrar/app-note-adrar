import { useState } from "react"
import './Adding.css'

export function Adding({ addNote }) {

    const [titre, setTitre] = useState("")
    const handleTitreInput = e => {
        setTitre(e.target.value)
    }

    const [contenu, setContenu] = useState("")
    const handleContenuInput = e => {
        setContenu(e.target.value)
    }

    const [tag, setTag] = useState("")


    const handleSubmit = () => {
        addNote({
            title: titre,
            content: contenu,
            categorie: tag
        })
    }

    return (
        <div className="add-container">
            <input className="titre" type="text" value={titre} onInput={handleTitreInput} placeholder="Titre" />
            <textarea className="contenu" type="text" value={contenu} placeholder="Rentrez votre note ici" onInput={handleContenuInput}></textarea>
            <select className="categorie" name="categorie" onChange={e => {setTag(e.target.value)}}>
                <option value="">Sans catégorie</option>

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
            <button className="ajout" onClick={handleSubmit} >Ajouter</button>
        </div>
    )
}