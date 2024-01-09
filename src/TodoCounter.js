import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    return (
        <h1 className="TodoCounter">
            Tareas completadas: <span>{ completed }</span> de <span>{ total }</span>
        </h1>
    );
}

export { TodoCounter }