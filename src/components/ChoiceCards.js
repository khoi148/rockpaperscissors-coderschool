import React from 'react'

export default function ChoiceCards(props) {

    const DEFAULT_IMG = "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";
    let winOrLoseBorder;
    
    if(props.winner === null) {
        winOrLoseBorder = 'start';
    } else if(props.title === 'Computer') {
        props.winner === 'Computer' ? winOrLoseBorder = 'winner' : props.winner === 'You' ? winOrLoseBorder = 'loser' : winOrLoseBorder='tie';
    } else if(props.title === 'You') {
        props.winner === 'You' ? winOrLoseBorder = 'winner' : props.winner === 'Computer' ? winOrLoseBorder = 'loser' : winOrLoseBorder='tie';
    }


    return (
        <div className={`choice-card ${winOrLoseBorder} m-3 p-3`}>
            <h1>{props.title || DEFAULT_IMG}</h1>
            <img src={props.imgURL || DEFAULT_IMG} alt={props.title}/>
            <h1>Winner: {props.winner}</h1>
        </div>
    )
}
