function TodoItem(props) {
    return (
        <li>
            <span>V</span>
            <p>{props.desc}</p>
            <span>X</span>
        </li>
    )
}

export { TodoItem }