import Playerfun from "./Components/Player.jsx";
import Game from "./Components/Game.jsx";
import { useState } from "react";

function App() {
  const [actPlayer,setactPlayer] =useState('X');

  function handlegamebox(){
    setactPlayer((nowActPlayer) => nowActPlayer =='X' ? 'O' : 'X');
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Playerfun name="1st Player" symbol="X" />
          <Playerfun name="2nd Player" symbol="O" />
        </ol>
        <Game onSelectbox={handlegamebox} actplayerSymbol={actPlayer}/>
      </div>
      LOG
    </main>
  );
}

export default App;
