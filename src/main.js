

function repeatString(string, number_of_times) {
let repeat = [];

 for(let i=0; i<number_of_times;i++){
        repeat[i] = "string";
    }
 let text = repeat.join('');
    return text;
   // return repeat;

}


function reverseString(string){
    let reverse = "";
    for(let i=1; i <= string.length; i++){
        reverse += string.charAt(string.length-i);
    }
    ///let reversedString = reverse.join('');
    console.log(reverse);
    return reverse;
}

function removeFromArray(array, value){
    let newArray = [];
    newArray = array.filter(number => number !== value);
    return newArray;
}

function sumAll(a,b){
    let finalSum = 0;
    for(let i=a; i<=b; i++){
        finalSum +=i;
    }
    return finalSum;
}

function palindrome(word){
  let string = word.trim().replace(/\s/g, '').toLowerCase();

  for( let i=0; i < string.length; i++){
    if(string[i] !== string[string.length -1-i]){
      return false;
    }


  }


   return true;
}

function split(word){
  return word.split('');
}

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'

  }
]



function getTheTitles(titles){
  let title = [];
  for(let i=0; i <titles.length; i++){
    title[i] = titles[i]['title'];
  }
  return title;
}

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
  {
    name: "Joe",
    yearOfBirth: 1950,
  },
]

function findOldest(person){
    let oldest = person.map();
  return oldest;
}

function yearsLived(person){
  let current = new Date().getFullYear();
  let years = person.map((person) => {

    if(person.yearOfDeath === undefined){
      return current - person.yearOfBirth;//new Date().getFullYear() - person.yearofBirth;
    }

    return person.yearOfDeath - person.yearOfBirth;
  })
      //return Math.max(...years);
  return years;
}

let container = document.getElementById('container');

//console.log(yearsLived(people));
//console.log(yearsLived(people));
//console.log(people[3].yearOfDeath === undefined);
//console.log(new Date().getFullYear() - people[3].yearOfBirth);
let value = prompt("what is the number of squares in a row that you want?");
for (let i=0; i<(value*value); i++){
 const box = document.createElement('div')
  box.className = 'sample';
  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'green';
  })
  box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'orange';
  })
 container.appendChild(box);
 console.log("box has been appended");
}
let flexboxBasis = document.getElementsByClassName('sample');
//let flexboxBasis1 = document.querySelector(".sample1");
//let flexboxBasis2 = document.getElementById('sample2')
//flexboxBasis1.style.flexBasis = '400px';
//flexboxBasis.style.flexBasis = "25%";
//flexboxBasis2.style.backgroundColor = '#FF0000';
//flexboxBasis1.style.backgroundColor = "orange";

//let button1 = document.createElement('button');

document.body.style.backgroundColor = "lightblue";

//flexboxBasis2.style.backgroundColor = 'orange';
//flexboxBasis1.style.backgroundColor = 'orange';
//flexboxBasis2.style.flexBasis = '25%';

let basisValue = 100/value;
console.log(basisValue);


for(let i=0; i<flexboxBasis.length; i++){
  flexboxBasis[i].style.flexBasis = `${basisValue}%`;
}

console.log(flexboxBasis);

const button1 = document.getElementById('button1');

button1.addEventListener('click', () => {
  container.remove();
})









