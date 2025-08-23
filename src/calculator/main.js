const container = document.getElementById('container');
let buttonArray = ['+','*', '-', '/', '=', '.', 'AC', 'x', 'x', 'x'];
let screen = document.getElementById('screen');
let screenText = "";

function add(...numbers){
  let result = parseInt(numbers[0]) + parseInt(numbers[2]);
  //console.log(result);
  return result;
}

function operate(string){
  values = string.split('');
  switch(values[1]){
    case '+':
      screen.innerText = add(...values);
      break;
    case '/':
      break;
    case '*':
      break;
    case '-':
      break;
  }
}

for (let i = 0; i < 20; i++) {
  const button = document.createElement('button');
  button.id = `button${i}`;
  if (i<=10){
    button.innerText = `${i}`;
  }else{
    button.innerText = `${buttonArray[i-11]}`;

  }

  if(button.id==='button17'){
    button.addEventListener('click', () => {
      screenText = '';
      screen.innerText = screenText;
    })
  }else if (button.id==='button15'){
    button.addEventListener('click', () => {
      operate(screenText);
      })
  }else{
    button.addEventListener('click', () => {
      screenText = screenText.concat(button.innerText)
      screen.innerText = screenText;
    })
  }

  container.appendChild(button);
}

let token = [];
let tokens2 =token[-1];
console.log(tokens2);

