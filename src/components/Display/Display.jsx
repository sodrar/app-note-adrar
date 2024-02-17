import { useState } from 'react';
import { DisplayNote } from '../DisplayNote/DisplayNote';
import './Display.css';
import { DisplayModif } from '../DisplayModif/DisplayModif';

export function Display({ current }) {

    const [onModif, setOnModif] = useState(false)
    const handleModif = () => {
        setOnModif(!onModif)
    }

    return (
        <>
            {onModif ? <DisplayModif /> : <DisplayNote handleModif={handleModif} current={current} />}
        </>
    )
}