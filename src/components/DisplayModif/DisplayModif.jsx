import { useState } from "react"
import './DisplayModif.css'

export function DisplayModif({current, modifyNote}) {

    const [titre, setTitre] = useState(current.title)
    const updateTitre = e => {
        setTitre(e.target.value)
    }

    const [contenu, setContenu] = useState(current.content)
    const updateContenu = e => {
        setContenu(e.target.value)
    }

    return (
        <div className="modif">
            <h1>Modification :</h1>
            <input type="text" name="titre" id="titre" value={titre} onInput={updateTitre}/>
            <textarea name="contenu" id="contenu" cols="30" rows="10" value={contenu} onInput={updateContenu}></textarea>
            <button className="btn-modif" onClick={() => {
                modifyNote({
                    title: titre,
                    content: contenu,
                    liked: current.liked
                },current.id)
            }}>Modifier</button>
        </div>
    )
}