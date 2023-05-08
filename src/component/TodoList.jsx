import {useState, useEffect} from 'react'
import Todo from './Todo';
import './todos.css'

const TodoList = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
          return JSON.parse(savedTodos);
        } else {
          return [];
        }
      });

    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!newTodo) return;
      setTodos([...todos, newTodo]);
      setNewTodo('');
    };
  
    const handleDelete = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const handleUpdate = (index, newText) => {
      const newTodos = [...todos];
      newTodos[index].text = newText;
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    };
  
    return (
      <div className="todo-list">
        <h2>Todo List</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a todo"
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default TodoList