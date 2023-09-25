import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='todo__wrapper'>

        <div className="todo__box-neon">
          <span className='todo__box-neon-title'> Create your better future by achieving small goals</span>
          <span className='todo__box-neon-gradient'></span>
          <span className='todo__box-neon-dodge'></span>
        </div>
        
        <div className='todo__box-input'>
        <input
          type='text'
          className='todo__input'
          placeholder='Write your goal for today'
        />
        <button className='todo__btn'>
              Add goal
        </button>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
