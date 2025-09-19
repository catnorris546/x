/*
const form = document.forms[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  fd = new FormData(form);
  for (let key of fd.keys()) {
    console.log(key, fd.get(key));
  }
});

form.addEventListener("formdata", event => {
  // event.formData grabs the object
  console.log(event.formData);
});*/


class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    console.log(this.value);
  }
}

let button = new Button("hello");
setTimeout(button.click, 1000);