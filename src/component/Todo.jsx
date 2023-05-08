import React, { useState } from 'react';

function Todo({ todo, index, handleDelete, handleUpdate }) {
  const [editing, setEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.text);

  const handleSave = () => {
    handleUpdate(index, newTodo);
    setEditing(false);
  };

  if (editing) {
    return (
      <div>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleSave}>Save</button>
      </div>
    );
  } else {
    return (
      <div>
        <span>{todo.text}</span>
        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </div>
    );
  }
}

export default Todo;
