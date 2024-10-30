import { IFilter,} from './interface'
import { renderMarkup } from "./pagination";

const filterBtn = document.querySelector('.js-filterBtn') as HTMLElement
const buttons = document.querySelectorAll('.filter__btn') as NodeListOf<HTMLButtonElement>;
const exerciseTitle = document.querySelector('.js-exercises__title') as HTMLElement;
const searchContainer = document.querySelector('.search-container') as HTMLElement

export const initialFilter: IFilter = {
    filterName: 'Muscles',
    exercises: 'calves',
    currentPage: '1',
}

const listType = 'exercises'

function onClick(evt: Event) {
    const target = evt.target as HTMLElement;

    if (!target.classList.contains('filter__btn')) {
        return
    }

    const filterName = target.dataset.name || 'Muscles';
    initialFilter.filterName = filterName
    initialFilter.currentPage = '1'

    buttons.forEach(btn => btn.classList.remove('filter__btn--active'))
    target.classList.add('filter__btn--active')
    
    exerciseTitle.innerHTML = 'Exercises'
    searchContainer.style.display = 'none'

    renderMarkup(listType, initialFilter.filterName, initialFilter.exercises)
}

renderMarkup(listType, initialFilter.filterName, initialFilter.exercises)



filterBtn.addEventListener('click', onClick)
