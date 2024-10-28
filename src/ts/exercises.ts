import { fetchFilterExercises } from "./api";
import { createMarkupForExercises, createMarkupForExercisesPagination } from "./createMarkup";
import { IFilter,} from './interface'

const filterBtn = document.querySelector('.js-filterBtn') as HTMLElement
const exercisesList = document.querySelector('.js-exercises__list') as HTMLElement;
const subtypeExercisesList = document.querySelector('.js-subtype-exercises__list') as HTMLElement
const paginationList = document.querySelector('.js-exercises__pagaination') as HTMLElement
const buttons = document.querySelectorAll('.filter__btn') as NodeListOf<HTMLButtonElement>;

const initialFilter: IFilter = {
    filterName: 'Muscles',
    currentPage: '1'
}

let paginationBtns: NodeListOf<HTMLButtonElement>;


function onClick(evt: Event) {
    const target = evt.target as HTMLElement;

    exercisesList.style.display = 'flex'
    subtypeExercisesList.style.display = 'none'

    if (!target.classList.contains('filter__btn')) {
        return
    }

    const filterName = target.dataset.name || 'Muscles';
    initialFilter.filterName = filterName
    initialFilter.currentPage = '1'

    buttons.forEach(btn => btn.classList.remove('filter__btn--active'))
    target.classList.add('filter__btn--active')
    
    renderMarkup()
}

renderMarkup()

function renderMarkup() {
    fetchFilterExercises(initialFilter)
    .then(({totalPages, results}) => {
        exercisesList.innerHTML = createMarkupForExercises(results)

        if (totalPages <= 1) {
            paginationList.innerHTML = ''
            return
        } else {
            paginationList.innerHTML = createMarkupForExercisesPagination(totalPages);

            paginationBtns = document.querySelectorAll('.pagination__btn')
            paginationBtns[Number(initialFilter.currentPage)-1].classList.add('pagination__btn--active')
        }
    })
    .catch(err => console.log(err))    
}

function pagination(evt: Event) {
    const target = evt.target as HTMLElement;

    const paginationItem = target.closest('.pagination__item') as HTMLElement;
    
    if (!paginationItem || target.classList.contains('pagination__list')) {
        return
    }

    const page = paginationItem.dataset.page

    if (initialFilter.currentPage !== page?.toString()) {
        initialFilter.currentPage = page?.toString() || '1';
        renderMarkup()
        paginationBtns.forEach(btn => btn.classList.remove('pagination__btn--active'))
    }
}

filterBtn.addEventListener('click', onClick)
paginationList.addEventListener('click', pagination)
