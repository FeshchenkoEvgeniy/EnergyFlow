import { sendFeedbackExercisesById } from "./api";

const ratingForm = document.querySelector('.js-rating-form') as HTMLFormElement;
const ratingText = document.querySelector('.js-rating-modal__text') as HTMLElement;
const inputRatingElements = document.querySelectorAll('.rating-modal__input') as NodeListOf<HTMLInputElement>;


let rating:string = '0'


export function addToFavoriteAndGiveRating(evt: Event) {
    const target = evt.target as HTMLElement;

    if (target.classList.contains('js-modal-favorite')) {
    const modal = target.closest('.favorite-modal') as HTMLElement;
    const exerciseId = modal.dataset.id || '64f389465ae26083f39b1b4a'
        
    const favoriteId = JSON.parse(localStorage.getItem('favorite') || '[]')

    if (!favoriteId.includes(exerciseId)) {
        favoriteId.push(exerciseId)
        
        localStorage.setItem('favorite', JSON.stringify(favoriteId))

        Notiflix.Notify.success('Exercise successfully added to favorites')
    } else {
        Notiflix.Notify.failure('The exercise has already been added to your favorites') 
    }
    } 
}

function chooseRating(evt: Event) {
    const target = evt.target as HTMLInputElement
    if (target.classList.contains('rating-modal__input')) {
        rating = target.value;
        ratingText.innerHTML = `${rating}.0`
    }
}

export function checkedRatingInputs() {
    ratingText.innerHTML = `0.0`
    
    inputRatingElements.forEach(input => {
        input.checked = false;
    });

}


function sendFeedback(evt: Event) {
    evt.preventDefault();

    const target = evt.target as HTMLFormElement
    const { userEmail, userResponse } = target;

    const modal = document.querySelector('.favorite-modal') as HTMLElement;
    const exerciseId = modal.dataset.id || '64f389465ae26083f39b1b4a'

    if (userEmail.value.trim() && userResponse.value.trim()) {
        sendFeedbackExercisesById(exerciseId, userEmail.value, userResponse.value, rating)
    } else {
        Notiflix.Notify.failure('Please fill in all fields') 
    }
    
    userEmail.value = ''
    userResponse.value = ''
    checkedRatingInputs()
}

inputRatingElements.forEach(input => {
    input.addEventListener('change', chooseRating);
});

if (!ratingForm.hasAttribute('data-submit-listener')) {
    ratingForm.addEventListener('submit', sendFeedback);
    ratingForm.setAttribute('data-submit-listener', 'true');
}


