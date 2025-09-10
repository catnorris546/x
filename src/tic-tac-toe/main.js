const gameboard = [["","",""],["","",""],["","",""]];

console.log(gameboard);

function emptyOrNot(row,column,symbol){
  empty = gameboard[row][column] !== "";
  if(!empty){
    gameboard[row][column] = symbol;
  }
  return empty;
}

function gameLogic(symbol, won){
  switch(symbol){
    case gameboard[0][0] === symbol && gameboard[0][1] && gameboard[0][2]:
    case gameboard[1][0] === symbol && gameboard[1][1] && gameboard[1][2]:
      won();
      break;
  }
}



function player(name){
      let wins = 0;
  const won = () => {
    wins++;
    console.log(`Player ${name} has won, They have ${wins} wins `);
  }

  const move = () => {
    let symbol = prompt("Are you using x or o?");
    let row = prompt("Please enter what row to put symbol in");
    let column = prompt("Please enter what column to put symbol in");

    while(emptyOrNot(row, column,symbol)){
      prompt("pick another spot")
      let row = prompt("Please enter what row to put symbol in");
      let column = prompt("Please enter what column to put symbol in");

      if(!emptyOrNot(row, column,symbol)){
        break;
      }
    }
    gameLogic(symbol,won);
  }

  return {won, name, move};
}





const jim = player("jim");
const kim = player("kim");
kim.move()
kim.move();
console.log(gameboard);
kim.move();
console.log(gameboard);



/*var player = (function(){
    let wins = 0;
    const won = (name) => {
      wins++;
      console.log(`Player ${name} has won, They have ${wins} wins `);
    }

    return {won}
})()*/


/*function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});*/
