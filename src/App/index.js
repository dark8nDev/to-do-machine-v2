import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   { desc: 'Aprender React', completed: true },
//   { desc: 'Conseguir trabajo', completed: false },
//   { desc: 'Practicar frances', completed: false },
//   { desc: 'Ir al gym', completed: true },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

// localStorage.removeItem('TODOS_V1')

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
