import { renderMarkup } from "./pagination";

const exercisesList = document.querySelector('.js-exercises__list') as HTMLElement;

function onClick(evt: Event) {
    const target = evt.target as HTMLElement;
    const listType = 'subtypeExercises'

    if (target.classList.contains('exercises__list')) {
        return
    }
    const exercisesItem = target.closest('.exercises__item') as HTMLElement
    const { filtername = 'muscles', exercise='calves'} = exercisesItem.dataset
    
    renderMarkup(listType, filtername, exercise)
}

exercisesList.addEventListener('click', onClick)