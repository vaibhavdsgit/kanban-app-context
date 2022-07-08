import React, { useContext } from 'react';

import { ChevronRight, ChevronLeft, Delete} from "react-feather"
import { AppContext } from '../appContext';

import './Card.css';

function Card(props){

    const {removeCard, moveLeft, moveRight} = useContext(AppContext)
    const {id} = props.card
    return(
        
        <div className='card'>
            <div className='card-data'>
                <p>{props.card.name}</p>
            </div>
            <div className='card-buttons'>
                <p onClick={()=> moveLeft(props.boardId, id)}>{<ChevronLeft />}</p>
                <p onClick={()=> moveRight(props.boardId, id)}>{<ChevronRight />}</p>
                <p onClick={()=> removeCard(props.boardId, id)}>{<Delete />}</p>
            </div>
        </div>
    )
}
export default Card
