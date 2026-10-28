import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css'
import isWinner from "../helpers/CheckWinner";

function Grid({numberOfCards}){
    // Creating state
   const [board, setBoard] = useState(Array(numberOfCards).fill(""))
   const [turn, setTurn] = useState(true) 
   const [winner, setWinner] = useState(null);

   function play(index) {
      if(turn == true){
        board[index] = 'O';
      }
      else {
        board[index] = 'X'
      }
      const win = isWinner(board , turn ? 'O':'X')  

      if(win){
        setWinner(win)
      }
      setBoard([...board])// nayi array, purne ko unpack karna hoga
      setTurn(!turn)  // updating turn

    }
    function reset(){
        setTurn(true)
        setWinner(null)
        setBoard(Array(numberOfCards).fill("") )   // initial state of Board
    }

   return(
       <div className="grid-wrapper">
             {
                winner && (
                    <>
                      <h1 className="turn-highlight"> Winner is {winner}</h1>
                      <button className="reset" onClick={reset}> Reset Game </button>
                    </>
                )
             }
            <h1 className="turn-highlight"> Current turn : {(turn)? 'O' : 'X'}</h1>
            <div className="grid">
              {board.map((el, idx)=> <Card key={idx} onPlay ={play} player = {el} index = {idx} gameEnd= {winner ? true : false} />)} 
            </div>
       </div>
   )
}
export default Grid;