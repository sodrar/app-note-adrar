import './DisplayNote.css'

export function DisplayNote({current, handleModif, handleDelete}) {

    const handleDelClick = () => {
        handleDelete(current.id)
    }

    return (
        <>
            <h1>{current.title}</h1>
            <p>{current.content}</p>
            <button className="btn-modif" onClick={handleModif} >MODIFIER</button>
            <button className='btn-suppr btn-modif' onClick={handleDelClick}>SUPPRIMER</button>
        </>
    )
}