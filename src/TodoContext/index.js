import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)

    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length

    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.desc.toLowerCase()
        const searchText = searchValue.toLowerCase()
        return todoText.includes(searchText)
    })

    const completeTodo = (desc) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) => todo.desc === desc)
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const deleteTodo = (desc) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) => todo.desc === desc)
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }