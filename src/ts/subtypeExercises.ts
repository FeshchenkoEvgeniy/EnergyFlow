import { renderMarkup } from "./pagination";

const exercisesList = document.querySelector('.js-exercises__list') as HTMLElement;
const exerciseTitle = document.querySelector('.js-exercises__title') as HTMLElement;

function onClick(evt: Event) {
    const target = evt.target as HTMLElement;
    const listType = 'subtypeExercises'

    if (target.classList.contains('exercises__list')) {
        return
    }
    const exercisesItem = target.closest('.exercises__item') as HTMLElement
    const { filtername = 'muscles', exercise='calves'} = exercisesItem.dataset
    
    console.log('filtername:', filtername, 'exercise:', exercise)

    exerciseTitle.insertAdjacentHTML('beforeend', ` / <span class='exercises__title--subtype'>${exercise.charAt(0).toUpperCase() + exercise.slice(1)}</span>`)

    renderMarkup(listType, filtername, exercise)
}

exercisesList.addEventListener('click', onClick)