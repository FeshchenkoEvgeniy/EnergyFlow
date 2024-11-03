import { subscriptionToNewExercises } from "./api";

const subscriptionBtn = document.querySelector('.subscribe__btn') as HTMLButtonElement
const subscriptionInput = document.querySelector('.js-subscribe__input') as HTMLInputElement

const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

function onClick(evt: Event) {
evt.preventDefault()

const email = subscriptionInput.value.trim();
    
if (!email) {
    Notiflix.Notify.failure('Please enter your email');
} else if(!regex.test(email)){
    Notiflix.Notify.failure('please enter a valid email (test@example.com)')    
} else {
    subscriptionToNewExercises(email)
    .then(({message}) => {
        Notiflix.Notify.success(message)
    })
    .catch(error => Notiflix.Notify.failure(error.message))
}
}


subscriptionBtn.addEventListener('click', onClick)