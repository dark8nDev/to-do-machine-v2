function TodoCounter({ total, completed }) {
    return (
        <h1>
            Tareas completadas: { completed } de { total }
        </h1>
    );
}

export { TodoCounter }