import {useState} from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
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

export default Todos