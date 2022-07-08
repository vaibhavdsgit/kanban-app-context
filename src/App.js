import React, { useState} from 'react';

import Board from './Components/Board/Board';
import { AppContext } from './Components/appContext';

import './App.css';

function App() {

  const boardType = ['Backlog', 'To Do', 'InProgress', 'Done'];
  const [newTask, setNewTask] = useState("");

  const changeHandler = (event) =>{
    setNewTask(event.target.value);
  }

  const [boards,setBoards]= useState([
    {
      id: 0,
      title: boardType[0],
      cards:[]
    },
    {
      id: 1,
      title: boardType[1],
      cards:[]
    },
    {
      id: 2,
      title: boardType[2],
      cards:[]
    },
    {
      id: 3,
      title: boardType[3],
      cards:[]
    }
  ]);

  const addCard=()=>{
    const tempBoards = [...boards];

    tempBoards[0].cards.push({
      id: Date.now() + Math.random()*2,
      name: newTask,
      stage: 0
    })

    setBoards(tempBoards);
    setNewTask("");

  }

  const removeCard=(bid, cid)=>{
    const bIndex = boards.findIndex((item)=> item.id===bid)
    if(bIndex<0)return;

    const tempBoards=[...boards];
    const cards = tempBoards[bIndex].cards;

    const cIndex = cards.findIndex((item)=> item.id===cid)
    if(cIndex<0)return;

    
    cards.splice(cIndex,1);
    setBoards(tempBoards);
  }

  const moveRight = (bid, cid) =>{
    const board_id = bid + 1;

    if(board_id <=3){
      
      const tempBoards = [...boards];
      const cards = tempBoards[bid].cards;

      const cardIndex = cards.findIndex((item) => item.id === cid);
      if(cardIndex < 0) return;

      const removed_card = cards[cardIndex];

      cards.splice(cardIndex, 1);

      tempBoards[board_id].cards.push(removed_card);
      setBoards(tempBoards)
    }
    else{
      return;
    }
  }

  const moveLeft = (bid, cid) =>{
    const board_id = bid-1;

    if(board_id >= 0){

      const tempBoards = [...boards];
      const cards = tempBoards[bid].cards;

      const cardIndex = cards.findIndex((item) => item.id === cid);
      if(cardIndex < 0) return;

      const removed_card = cards[cardIndex];

      cards.splice(cardIndex, 1)

      tempBoards[board_id].cards.push(removed_card)
      setBoards(tempBoards) 
    }  
    else{
      return;
    }
  }

  return (
    <div className="App">
      <AppContext value={{removeCard, moveRight, moveLeft}}>
      <div className="navbar">
        <h1>Kanban App</h1>
      </div>
      <div className="app-outer">

      <div className='app_title'>
        <input type="text" value={newTask} onChange={changeHandler} placeholder="New Task"></input>
        <button type="submit" className='btn btn-primary ml-2' onClick={addCard}>Create Task</button>
      </div>

      <br />
      
        <div className="app-boards">
          {
            boards.map((item)=><Board 
            key={item.id}
            board = {item}
            />)
          }
              
        </div>
      </div>
      </AppContext>
    </div>
    
  );
}

export default App;
