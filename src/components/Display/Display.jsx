import './Display.css';

export function Display({ current }) {
    return (
        <>
            <h1>{current.title}</h1>
            <p>{current.content}</p>
        </>
    )
}