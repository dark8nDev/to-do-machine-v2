import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { desc: 'Aprender React', completed: true },
  { desc: 'Conseguir trabajo', completed: false },
  { desc: 'Practicar frances', completed: false },
  { desc: 'Ir al gym', completed: true },
]

function App() {
  return (
    <>
      <TodoCounter completed={1} total={3} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.desc}
            desc={todo.desc}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
