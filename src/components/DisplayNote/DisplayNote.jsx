import './DisplayNote.css'

export function DisplayNote({current, handleModif}) {



    return (
        <>
            <h1>{current.title}</h1>
            <p>{current.content}</p>
            <button className="btn-modif" onClick={handleModif} >MODIFIER</button>
        </>
    )
}