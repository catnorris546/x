let amount_of_squares = 9;
let isfull = true;
let container = document.getElementById("container");
const gameboard =[];
const gameWinConditions = {};
let game_won = false;
let player1_turn = true;

function player(name, symbol) {
  this.name = name;
  this.symbol = symbol;
  let wins = 0;
  const won = () => {
    wins++;
    console.log(`${name} has won, They have ${wins} wins`);
  };
  return {symbol, name, won};
}

function dialog(message) {
  const dialog = document.createElement('dialog');
      dialog.innerText = message;
      container.append(dialog);
      if(game_won){
        const resetButton = document.createElement('button');
        resetButton.innerText = 'Reset Game';
        dialog.appendChild(resetButton)
        resetButton.addEventListener('click', e => {
          dialog.close();
        })
        dialog.showModal();
      }else{
        const closeButton = document.createElement('button');
        closeButton.innerText = 'Close';
        dialog.appendChild(closeButton)
        closeButton.addEventListener('click', e => {
          dialog.close();
        })
        dialog.show();
      }

}

function isFull(){
  for (let i=0; i<amount_of_squares; i++) {
    const space = document.getElementById(`space${i}`);
      if(space.innerText === '') {
        isfull = false;
      }
  }
  return isfull;
}

function gameWon(marker1,marker2){
  gameWinConditions.firstRowPlayer1 = (gameboard[0] === marker1 && gameboard[1] === marker1 && gameboard[2] === marker1) ;
  gameWinConditions.secondRowPlayer1 = (gameboard[3]=== marker1 && gameboard[4]=== marker1 && gameboard[5]=== marker1);
  gameWinConditions.thirdRowPlayer1 = (gameboard[6]=== marker1 && gameboard[7]=== marker1 && gameboard[8]=== marker1);
  gameWinConditions.firstColumnPlayer1 = (gameboard[0]=== marker1 && gameboard[3]=== marker1 && gameboard[6]=== marker1);
  gameWinConditions.secondColumnPlayer1 = (gameboard[1]=== marker1 && gameboard[4]=== marker1 && gameboard[7]=== marker1);
  gameWinConditions.thirdColumnPlayer1 = (gameboard[2]=== marker1 && gameboard[5]=== marker1 && gameboard[8]=== marker1);
  gameWinConditions.firstDiagonalPlayer1 = (gameboard[0]=== marker1 && gameboard[4]=== marker1 && gameboard[8]=== marker1);
  gameWinConditions.secondDiagonalPlayer1 = (gameboard[2]=== marker1 && gameboard[4]=== marker1 && gameboard[6]=== marker1);
  gameWinConditions.firstRowPlayer2 = (gameboard[0] === marker2 && gameboard[1] === marker2 && gameboard[2] === marker2);
  gameWinConditions.secondRowPlayer2 = (gameboard[3] === marker2 && gameboard[4] === marker2 && gameboard[5] === marker2);
  gameWinConditions.thirdRowPlayer2 = (gameboard[6] === marker2 && gameboard[7] === marker2 && gameboard[8] === marker2);
  gameWinConditions.firstColumnPlayer2 = (gameboard[0] === marker2 && gameboard[3] === marker2 && gameboard[6] === marker2);
  gameWinConditions.secondColumnPlayer2 = (gameboard[1] === marker2 && gameboard[4] === marker2 && gameboard[7] === marker2);
  gameWinConditions.thirdColumnPlayer2 = (gameboard[2] === marker2 && gameboard[5] === marker2 && gameboard[8] === marker2);
  gameWinConditions.firstDiagonalPlayer2 = (gameboard[0] === marker2 && gameboard[4] === marker2 && gameboard[8] === marker2);
  gameWinConditions.secondDiagonalPlayer2 = (gameboard[2]  === marker2&& gameboard[4] === marker2 && gameboard[6] === marker2);

  Object.keys(gameWinConditions).forEach(key => {
    //console.log(key, gameWinConditions[key]);
    if(gameWinConditions[key] === true) {
      console.log(key);
        game_won = true;
        if(player1_turn){
          player1.won();
        }else
          player2.won();
    }
  });

}



let player1 =  player("player1", "x");

let player2 =  player("player2","o");




/*while(!game_won){


}*/

for (let i=0; i<amount_of_squares; i++) {
  const space = document.createElement('div');
  space.id = `space${i}`;
  space.className = `space`;

  space.addEventListener("click", e => {
    if(space.innerText === "x" || space.innerText === "o") {
      ///insert while loop here

    }else{


      if(player1_turn) {
        space.innerText = "x";

        gameboard[i]= space.innerText;

        gameWon(player1.symbol,player2.symbol);


        player1_turn =false;
        dialog("It is Player 2's Turn")

      }else{
        space.innerText = "o";

        gameboard[i]= space.innerText;

        gameWon(player1.symbol,player2.symbol);

        player1_turn = true;
        dialog("It is Player 1's Turn")
      }




      if(i===8) {
        if(isFull()){
          console.log("the game is full");
        }
      }

    }

  })
  container.appendChild(space);
}

