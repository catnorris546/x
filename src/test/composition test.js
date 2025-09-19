//COMPOSITION
const eater = (state) => ({
  eat: ()=> {
    let nm = state.name || state.id;
    console.log(nm, 'eating');
  }
});
const driver = (state) => ({
  drive: ()=>{
    let nm = state.name || state.id;
    console.log(nm, '\u26A1', 'driving');
  }
});
const wifier = (state) => ({
  wifi: ()=>{
    let nm = state.name || state.id;
    console.log(nm, '\u26A1', 'connecting');
  }
});
const talker = (state)=>({
  talk: (...msg)=> console.log( msg.join(' '))
});
const walker = (state) => ({
  walk: ()=> {
    let nm = state.name || state.id;
    console.log(nm, 'walking');
  }
});

const Person = (name, speed=3) => {
  let state = {
    name,
    speed
  }
  return Object.assign({},
    talker(state),
    walker(state),
    eater(state));
};
let Bob = Person('Bob');
Bob.talk('Hello from Bob.');
Bob.eat();
Bob.walk();
console.log(walker());
