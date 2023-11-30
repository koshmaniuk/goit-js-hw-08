import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")
const localStorageKey = "feedback-form-state";

form.addEventListener ("input", throttle(onInput, 500));
form.addEventListener ("submit", onSubmit);

let inputData = {};

function onInput() {
  inputData = {
    email: form.email.value,
    message: form.message.value
  };
localStorage.setItem(localStorageKey, JSON.stringify(inputData));
}

function checkStorage () {
  let checkLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));
 
  if (checkLocalStorage !== null) {
    inputData = checkLocalStorage;
    for (const key in checkLocalStorage) {
      form.elements[key].value = checkLocalStorage[key];
    }
  } 
}
checkStorage()



function onSubmit(event) {
  event.preventDefault();

  if (event.target.email.value === '' || event.target.message.value === '') {
    return alert('Please fill in all the fields!');
  }
  
  console.log(inputData);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  }
  