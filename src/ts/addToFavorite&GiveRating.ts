const modalBackdrop = document.querySelector('.js-backdrop') as HTMLElement 
const ratingModal = document.querySelector('.js-rating-modal') as HTMLElement
const modal = document.querySelector('.js-modal') as HTMLElement;
const ratingContainer = document.querySelector('.js-rating-modal__container') as HTMLElement
const ratingText = document.querySelector('.js-rating-modal__text') as HTMLElement
const inputElements = document.querySelectorAll('.rating-modal__input');

let rating:string = '0'

function addToFavoriteAndGiveRating(evt: Event) {
    const target = evt.target as HTMLElement;

    if (target.classList.contains('js-modal-favorite')) {

    const modal = target.closest('.modal') as HTMLElement;
    const exerciseId = modal.dataset.id || '64f389465ae26083f39b1b4a'
        
    const favoriteId = JSON.parse(localStorage.getItem('favorite') || '[]')

    if (!favoriteId.includes(exerciseId)) {
        favoriteId.push(exerciseId)
        
        localStorage.setItem('favorite', JSON.stringify(favoriteId))

        Notiflix.Notify.success('Exercise successfully added to favorites')
    } else {
        Notiflix.Notify.failure('The exercise has already been added to your favorites') 
    }
    } else if (target.classList.contains('js-modal-rating')) {
        ratingModal.classList.remove('rating-modal--hidden')
        modal.style.display = 'none'
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
    let isChecked = false;
inputElements.forEach(input => {
    if (input.checked) {
        input.style.fill = 'rgba(27, 27, 27, 0.2);'
        isChecked = true;
    }
});

if (isChecked) {
    console.log('Принаймні один інпут включений');
} else {
    console.log('Всі інпуты не включені');
}
}

ratingContainer.addEventListener('click', chooseRating)
modalBackdrop.addEventListener('click', addToFavoriteAndGiveRating)