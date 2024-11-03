import { checkedRatingInputs } from "./addToFavorite&GiveRating";
import { fetchSubtypeExercisesById } from "./api";
import { createMarkupForSubtypeExercisesModal } from "./createMarkup";

const backdrop = document.querySelector('.js-backdrop') as HTMLElement;
const modal = document.querySelector('.modal') as HTMLElement;
const subtypeExercisesList = document.querySelector('.js-subtype-exercises__list') as HTMLElement;
const body = document.body;
const ratingModal = document.querySelector('.js-rating-modal') as HTMLElement;
const ratingText = document.querySelector('.js-rating-modal__text') as HTMLElement


function openModal(evt: Event) {
    const target = evt.target as HTMLElement;

    if (!target.classList.contains('js-subtype-exercises__btn')) return;

    const subtypeExercisesItem = target.closest('.js-subtype-exercises__item') as HTMLElement;
    const id = subtypeExercisesItem?.dataset.id || '64f389465ae26083f39b19d8';

    fetchSubtypeExercisesById(id)
        .then(result => {
            modal.innerHTML = createMarkupForSubtypeExercisesModal(result);
        })
        .catch(err => console.error('Error fetching subtype exercises:', err));
    showModal(true);
    checkedRatingInputs()
    // ratingText.innerHTML = `0.0`
}

function closeModal(evt: Event) {
    const target = evt.target as HTMLElement;

    if (target.classList.contains('js-rating-modal__close-btn') || target.classList.contains('js-backdrop') || target.classList.contains('js-modal-close')) {
        if (!ratingModal.classList.contains('rating-modal--hidden')) {
            ratingModal.classList.add('rating-modal--hidden');
            modal.style.display = 'block';
        } else {
            showModal(false);
        }
    }
}

function closeModalOnEscape(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
        if (!ratingModal.classList.contains('rating-modal--hidden')) {
            ratingModal.classList.add('rating-modal--hidden');
            modal.style.display = 'block';
        } else {
            showModal(false);
        }
    }
}

function showModal(show: boolean) {
    if (show) {
        backdrop.classList.remove('backdrop--hidden');
        body.style.overflowY = 'hidden';
        modal.style.display = 'block';
        document.addEventListener('keydown', closeModalOnEscape);
    } else {
        backdrop.classList.add('backdrop--hidden');
        modal.style.display = 'none';
        body.style.overflowY = '';
        document.removeEventListener('keydown', closeModalOnEscape);
    }
}

subtypeExercisesList.addEventListener('click', openModal);
backdrop.addEventListener('click', closeModal);