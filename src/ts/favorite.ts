import { fetchExercisesById, fetchSubtypeExercisesById } from "./api";
import { createMarkupForFavoriteSubtypeExercises, createMarkupForFavoriteExercisesModal } from "./createMarkup";

const favoriteExercisesList = document.querySelector('.js-favorite-exercises') as HTMLElement;
const notFoundContainer = document.querySelector('.js-favorite-exercises__notfound') as HTMLElement
const modal = document.querySelector('.js-modal') as HTMLElement
const body = document.querySelector('body') as HTMLElement
const backdrop = document.querySelector('.js-backdrop') as HTMLElement

const initialExercisesId = JSON.parse(localStorage.getItem('favorite') || '[]')

if (initialExercisesId.length > 8) {
    favoriteExercisesList.style.overflowY = 'scroll'
} else if(initialExercisesId.length){
    notFoundContainer.classList.add('favorite-exercises__notfound--hidden')
} else {
    notFoundContainer.classList.remove('favorite-exercises__notfound--hidden')
}


fetchExercisesById(initialExercisesId)
    .then(data => favoriteExercisesList.innerHTML = createMarkupForFavoriteSubtypeExercises(data))
    .catch(err => console.log(err))

function handlerClick(evt: Event) {
    const target = evt.target as HTMLElement;
    if (target.classList.contains('js-delete-exercises') || target.classList.contains('favorite-delete-icon')) {
        deleteExercise(evt)
    } else if (target.classList.contains('js-subtype-exercises__btn')) {
        openModal(evt)
    }
}

function openModal(evt: Event) {
    const target = evt.target as HTMLElement;

    if (!target.classList.contains('js-subtype-exercises__btn')) return;

    const subtypeExercisesItem = target.closest('.js-subtype-exercises__item') as HTMLElement;
    const id = subtypeExercisesItem?.dataset.id || '64f389465ae26083f39b19d8';

    fetchSubtypeExercisesById(id)
        .then(result => {
            modal.innerHTML = createMarkupForFavoriteExercisesModal(result);
        })
        .catch(err => console.error('Error fetching subtype exercises:', err));
    showModal(true);
}

function showModal(show: boolean) {
    if (show) {
        backdrop.classList.remove('backdrop--hidden');
        body.style.overflowY = 'hidden';
        modal.style.display = 'block';
    } else {
        backdrop.classList.add('backdrop--hidden');
        modal.style.display = 'none';
        body.style.overflowY = '';
    }
}

function closeModal(evt: Event) {
    const target = evt.target as HTMLElement;
    if (target.classList.contains('js-backdrop') || target.classList.contains('js-modal-close')) {
        showModal(false);
    }
}

function deleteExercise(evt: Event) {
    const target = evt.target as HTMLElement;

    const exercisesId = JSON.parse(localStorage.getItem('favorite') || '[]')

    const exerciseItem = target.closest('.js-subtype-exercises__item') as HTMLElement;
    const exerciseId = exerciseItem.dataset.id

    const arr = exercisesId.filter((id:string) => id !== exerciseId)

    localStorage.setItem('favorite', JSON.stringify(arr))

    fetchExercisesById(arr)
    .then(data => favoriteExercisesList.innerHTML = createMarkupForFavoriteSubtypeExercises(data))
    .catch(err => console.log(err))

    if (!arr.length) {
        notFoundContainer.classList.remove('favorite-exercises__notfound--hidden')
    }
}

favoriteExercisesList.addEventListener('click', handlerClick)
backdrop.addEventListener('click', closeModal);