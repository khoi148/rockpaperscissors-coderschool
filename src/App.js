import React from 'react';
import ChoiceCards from './components/ChoiceCards.js';
import './App.css';
const choices = {
  rock: "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};

function app() {
  return (
    <div className='App'>
      <ChoiceCards title="You" winner={false} imgURL={choices.rock}/>
      <ChoiceCards title="Computer" winner={true} imgURL={choices.paper}/>
    </div>
  );
}

export default app;

