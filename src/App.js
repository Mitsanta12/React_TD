import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [todo, setTodo] = useState('');
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDoing([...doing, todo]);
    setTodo('');
  }

  const handleDelete = (index) => {
    const newDoing = [...doing];
    newDoing.splice(index, 1);
    setDoing(newDoing);
  }

  const handleCheck = (index) => {
    const currentTodo = doing[index];
    handleDelete(index);
    setDone([...done, currentTodo]);
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={todo} 
          onChange={e => setTodo(e.target.value)} onKeyDown={(e)=>{e.key === 'Enter' && handleSubmit()}}
          placeholder="Add task"
        />
      </form>
      <div className='todo'>
        <h3>TODO</h3>
        <ul>
          {doing.map((todo, index) => (
            <li key={index}>
              {todo}
              <input 
                type="checkbox" 
                onClick={() => handleCheck(index)} 
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='done'>
        <h3>DONE</h3>
        <ul>
          {done.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

