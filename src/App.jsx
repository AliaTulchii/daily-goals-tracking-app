import React, { useEffect, useState } from 'react'
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import randomColor from 'randomcolor';
import Draggable from 'react-draggable';


const Homepage = () => {
    const [item, setItem] = useState('');
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    );

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items])

    const newItem = () => {
        if (item.trim() !== '') {
            const newItem = {
                id: uuidv4(),
                item: item,
                color: randomColor({
                    luminosity: 'bright',
                    hue: 'blue',
                }),
                
                // defaultPost: {
                //     x: 100,
                //     y: 500,
                // }
            }
            setItems((items) => [...items, newItem])
            setItem('')
        } else {
            alert('Enter your goal for today!')
            setItem('')
        }
    
    }
  
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }
  
  const updatePosition = (data, idx) => {
    let newArray = [...items]
    newArray[idx].defaultPosition = { x: data.x, y: data.y }
    setItems(newArray)
  }

  const keyPress = (e) => {
    const code = e.keyCode || e.which
    if (code === 13) {
      newItem()
    }
  }


  return (
    <div>
      <div className="todo__wrapper">
        <div className="todo__box-neon">
          <span className="todo__box-neon-title">
            {" "}
            Create your better future by achieving small goals
          </span>
          <span className="todo__box-neon-gradient"></span>
          <span className="todo__box-neon-dodge"></span>
        </div>

        <div className="todo__box-input">
          <input
            value={item}
            type="text"
            className="todo__input"
            placeholder="Write your goal for today"
            onChange={(e) => setItem(e.target.value)}
            onKeyDownCapture={(e) => keyPress(e)}
          />
          <button className="todo__btn" onClick={newItem}>Add goal</button>
        </div>
        <div className='item-box'>
        {items.map((i, idx) => {
                  return (
                    <Draggable
                      key={idx}
                      defaultPosition={i.defaultPosition}
                      onStop={(_, data) => {
                        updatePosition(data, idx)
                      }}
                    >
                          <div className='todo__item' style={{background: i.color}}>
                              {`${i.item}`}
                              <button className='todo__close-item' onClick={()=> deleteItem(i.id)}>X</button>
                          </div>
                      </Draggable>
                  )
              } )}
        </div>
        
        <div className='column-box'>
          <ul className='columns'>
            <li className='column'>
              <h4 className='column-title'>To do</h4>
            </li>
            <li className='column'>
            <h4 className='column-title'>In process</h4>
            </li>
            <li className='column'>
            <h4 className='column-title'>Done</h4>
            </li>
          </ul>
        </div>
              
      </div>
    </div>
  );
}

export default Homepage
