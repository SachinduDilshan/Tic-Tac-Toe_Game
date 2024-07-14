import { useState } from "react";

const gameBoard = [
    ["", "","" ],
    ["", "", ""],
    ["", "", ""],
];


export default function Game({onSelectbox,actplayerSymbol}) {
    const [playBoard, setplayBoard] = useState(gameBoard);

    function handlegamebox(rowIndex, colIndex){
        setplayBoard((prevplayBoard) => {
            const updatedBoard = [...prevplayBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = actplayerSymbol;
            return updatedBoard;
        });
        onSelectbox();

    }

    return(
        <ol id ="game-board">
            {playBoard.map((row,rowIndex) =>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex)=>
                        <li key={colIndex}>
                            <button onClick={()=> handlegamebox(rowIndex,colIndex)}>{playerSymbol}</button>
                        </li>
                        )}
                    </ol>
                </li>
            ))}
        </ol>
    );
}