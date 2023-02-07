import React, { useState } from 'react';
import '../App.css';

function Todo(){
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
    
      const handleDeleteDone = (index) => {
        const newDone = [...done];
        newDone.splice(index, 1);
        setDone(newDone);
      };
      
    return(
        
<>
             <div > 
                <h1>TODO APPLICATION</h1>
                <form onSubmit={handleSubmit}>
                  <input data-testId= "input"
                   type="text" 
                   value={todo} 
                   onChange={e => setTodo(e.target.value)} onKeyDown={(e)=>{e.key === 'Enter' && handleSubmit()}}
                    placeholder="Add task"
                  />
                </form>
              </div>
            <div className='container'>
              <div className='todo'>
                <h3>TODO</h3>
                <ul>
                  {doing.map((todo, index) => (
                    <li key={index}>
                      {todo}
                      <input data-testId= "checks"
                        type="checkbox" 
                        onClick={() => handleCheck(index)} 
                        className='checkbox'
                      />
                    </li>
                  ))}
                </ul>
              </div>
            
          <div className='done'>
            <h3>DONE</h3>
              <ul>
                {done.map((todo, index) => (
                  <li key={index}>
                    {todo}
                      <button className='Btn' onClick={() => handleDeleteDone(index)}>X</button>
                  </li>
                ))}
              </ul>
          </div>
        

              
              </div>
              
    )
    
    </>)    
}

export default React.memo(Todo);