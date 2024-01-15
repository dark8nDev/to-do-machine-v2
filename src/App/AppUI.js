import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
            <TodoCounter
                completed={completedTodos}
                total={totalTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {loading && <p>Cargando ...</p>}
                {error && <p>ERROR!</p>}
                {(!loading && searchedTodos.length === 0) && <p>No hay tareas</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.desc}
                        desc={todo.desc}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.desc)}
                        onDelete={() => deleteTodo(todo.desc)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export { AppUI }
