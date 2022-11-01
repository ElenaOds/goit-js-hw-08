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

const formData = {
    email: evt.target.email.value,
    message: evt.target.message.value
};
console.log(formData);

evt.target.reset();
localStorage.removeItem(STORAGE_KEY);
}

function onTextInput(evt) {
    const formInfo = { email: email.value , message: textarea.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInfo));
}

function populateInput() {
    const savedInput = localStorage.getItem(STORAGE_KEY); 
    
    if(savedInput) {
        const parsedInput = JSON.parse(savedInput);
        email.value = parsedInput.email;
        textarea.value = parsedInput.message;
    }
}

