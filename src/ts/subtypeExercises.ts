import { initialFilter } from "./exercises";
import { renderMarkup } from "./pagination";

const exercisesList = document.querySelector('.js-exercises__list') as HTMLElement;
const exerciseTitle = document.querySelector('.js-exercises__title') as HTMLElement;
const searchContainer = document.querySelector('.search-container') as HTMLElement
const searchBtn = document.querySelector('.js-filter__search-btn') as HTMLElement


let filterName:string;
const listType = 'subtypeExercises'

function onClick(evt: Event) {
    const target = evt.target as HTMLElement;

    if (target.classList.contains('exercises__list')) {
        return
    }
    const exercisesItem = target.closest('.exercises__item') as HTMLElement
    const { filtername = 'muscles', exercise='calves'} = exercisesItem.dataset

    filterName = filtername

    exerciseTitle.insertAdjacentHTML('beforeend', ` / <span class='exercises__title--subtype'>${exercise.charAt(0).toUpperCase() + exercise.slice(1)}</span>`)

    searchContainer.style.display = 'block'

    renderMarkup(listType, filtername, exercise)
}

function handleSearchClick() {
    const searchInput = document.querySelector('.js-filter__search') as HTMLInputElement
    const query = searchInput.value.trim().toLowerCase();
    exerciseTitle.innerHTML = `Exercises / <span class='exercises__title--subtype'>${query.charAt(0).toUpperCase() + query.slice(1)}</span>`
    initialFilter.currentPage = '1'
    if (query.length) {
        renderMarkup(listType, filterName, query)
    }
}

searchBtn.addEventListener('click', handleSearchClick)
exercisesList.addEventListener('click', onClick)