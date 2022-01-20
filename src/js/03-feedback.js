 import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const buttonSubmitEl = document.querySelector('button')
const emailInputEl = document.querySelector('input[name="email"]');
const messageInputEl = document.querySelector('textarea[name="message"]')
 const formField = {};

    
// let email = null;
// let message = null;

console.log(buttonSubmitEl)

form.addEventListener('submit', event => {
    event.preventDefault()
    localStorage.clear();
    emailInputEl.value = null;
    messageInputEl.value = null;
    console.log(formField);

})

form.addEventListener('input', throttle(event => {
    event.preventDefault();

   formField.email = emailInputEl.value
    formField.message = messageInputEl.value
    try {
        localStorage.setItem("feedback-form-state", JSON.stringify(formField) )
    } catch (error) {
        console.error('Set error: ', error.message)
    };
    // console.dir(formField.email)
}, 500))



const addingStorage = () => {
    if (localStorage.getItem("feedback-form-state") !== null) {
        emailInputEl.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
        messageInputEl.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
    }
}

addingStorage();

