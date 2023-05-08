import { useState } from "react";

function Todo({ todo, index, handleDelete, handleUpdate }) {
    const [editable, setEditable] = useState(false);
    const [newText, setNewText] = useState('');
  
    const handleEdit = () => {
      setEditable(true);
      setNewText(todo.text);
    };
  
    const handleSave = () => {
      handleUpdate(index, newText);
      setEditable(false);
    };
  
    return (
      <div className="todo">
        {editable ? (
          <input value={newText} onChange={(e) => setNewText(e.target.value)} />
        ) : (
          <div>{todo.text}</div>
        )}
        <div className="buttons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
          {editable && <button onClick={handleSave}>Save</button>}
        </div>
      </div>
    );
  }

  export default Todo;
  