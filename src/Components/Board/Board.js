import React from 'react';
import './Board.css';
import Card from '../Cards/Card'

function Board(props){
    return(
        <div className="board">
            <div className='board-top'>
                <p className='board-top-title'>{props.board?.title}</p>
            </div>
            <div className='board-cards'>
                {
                    props.board?.cards?.map((item)=><Card 
                        key={item.id}
                        card={item}
                        boardId={props.board.id}
                    />)
                }
            </div>
        </div>
    )
}
export default Board;