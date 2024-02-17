import { useState } from 'react';
import { DisplayNote } from '../DisplayNote/DisplayNote';
import './Display.css';
import { DisplayModif } from '../DisplayModif/DisplayModif';

export function Display({ current, modifyNote }) {

    const [onModif, setOnModif] = useState(false)
    const handleModif = () => {
        setOnModif(!onModif)
    }


    return (
        <>
            {onModif && Object.keys(current).length > 0 ? <DisplayModif modifyNote={modifyNote} current={current} /> : <DisplayNote handleModif={handleModif} current={current} />}
        </>
    )
}