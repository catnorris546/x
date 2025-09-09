let myLibrary = [];

let test_table = document.querySelector("tbody");


function Book(author,title,number_of_pages,read) {
  this.author = author;
  this.title = title;
  this.number_of_pages = number_of_pages;
  this.read = read;
  this.id = crypto.randomUUID();

}

Book.prototype.toggleRead = function() {
  console.log("Hello, I'm a player!");
};

function addBookToLibrary(author,title,number_of_pages,read) {
  myLibrary = [];

  // take params, create a book then store it in the array
  let book = new Book(author,title,number_of_pages,read);
  myLibrary.push(book);

  book_display(book);

}

addBookToLibrary("Jo Yuri","Study",50,true);
addBookToLibrary("Momo","Study",50,true);
addBookToLibrary("Sana","Study",50,true);
//addBookToLibrary("Jo Yuri","Study",50,true);
//addBookToLibrary("Jo Yuri","Study",50,true);




let sample = document.createElement("h1");
sample.innerHTML="Hello";

let testElement = document.getElementById("test1");
testElement.append(sample);
//console.log(myLibrary);



function book_display(book) {
    myLibrary.map(book => {
      let newRow = test_table.insertRow();
      newRow.id = book.id;
      let table_headers = ['author', 'title', 'number_of_pages', 'read', 'id'];

      for (let i = 0; i < 5; i++) {
        let newCell = newRow.insertCell();
        newCell.innerText = book[table_headers[i]];
            if(i===4){
              addButton(newRow, "Remove");
              addToggleButton(newRow, "Toggle Read Status",book);
            }
      }
    })
}

function addButton(newRow,text){
  let newCell = newRow.insertCell();
  let button = document.createElement("button");
  button.innerText = text;

  button.addEventListener("click",()=>{
        const rowtobeDeleted = document.getElementById(newRow.id);
        //console.log(rowtobeDeleted.rowIndex);
        //test_table.deleteRow(2);
        //newRow.remove()
        rowtobeDeleted.remove();


  })
  newCell.appendChild(button);
}


function addToggleButton(newRow,text, book){
  let newCell = newRow.insertCell();
  let button = document.createElement("button");
  button.innerText = text;

  button.addEventListener("click",()=>{
    const rowtobeAltered = document.getElementById(newRow.id);
    if(rowtobeAltered.cells[3].innerText==="true"){
      rowtobeAltered.cells[3].innerText = "false";
    }else{
      rowtobeAltered.cells[3].innerText = "true";
    }


    //console.log(change);
   //book.toggleRead();

   //.cells.item(3).value


  })
  newCell.appendChild(button);
}



/*let book_display = myLibrary.map( book =>{
  console.log(book)
  let newRow = test_table.insertRow();

  let table_headers = ["author","title","number_of_pages","read"];

  for(let i=0;i<4;i++){
    let newCell = newRow.insertCell();
    newCell.innerText = book[table_headers[i]];
  }

} );*/




let modal1 = document.getElementById("modal");
let button1 = document.getElementById("button1");

/*modal1.addEventListener("close", function(event){

 let testArray = modal1.returnValue.split(",");

  console.log(testArray);
  addBookToLibrary(testArray[1],testArray[3],testArray[5],testArray[7]);
  console.log("this worked");
})*/

button1.addEventListener("click", function(){
    modal1.close();

})

let form = document.getElementById("testForm");
//const form = document.forms[0];

form.addEventListener("submit", function(event){

  event.preventDefault();
  fd = new FormData(form);
  ///make fd into an object that has a key value pair and then input the arguments into addbookintolibrary
  let formdataArray = Object.fromEntries(Array.from(fd));
  //modal1.close(formdataArray);
  modal1.close();
  //console.log(fd);
  //addBookToLibrary(formdataArray["author"],formdataArray["title"],formdataArray["number_of_pages"],formdataArray["read"]);
  addBookToLibrary(formdataArray["author"],formdataArray["title"],formdataArray["number_of_pages"],formdataArray["read"]);




/*  for (let key of fd.keys()) {
    console.log(key, fd.get(key));
  }*/
})

let pop_up_button = document.getElementById("pop_up_button");

pop_up_button.addEventListener("click", function(){
  modal1.show();
})

