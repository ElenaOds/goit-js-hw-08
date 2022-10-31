import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextInput, 500));
populateInput();

function onFormSubmit(evt) {
evt.preventDefault();
evt.target.reset();
localStorage.removeItem(STORAGE_KEY);
}

function onTextInput(evt) {
    const formInfo = { email: email.value , message: textarea.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInfo));
    console.log(formInfo);
}

function populateInput() {
    const savedInput = localStorage.getItem(STORAGE_KEY);
    
    if(savedInput) {
        console.log(savedInput);
        onTextInput.value = savedInput;
    }
}

