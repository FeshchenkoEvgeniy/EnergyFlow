import { fetchFilterExercises, fetchSubtypeExercises } from "./api";
import { createMarkupForExercises, createMarkupForExercisesPagination, createMarkupForSubtypeExercises } from "./createMarkup";
import { initialFilter } from "./exercises";

const exercisesList = document.querySelector('.js-exercises__list') as HTMLElement;
const subtypeExercisesList = document.querySelector('.js-subtype-exercises__list') as HTMLElement
const paginationList = document.querySelector('.js-exercises__pagaination') as HTMLElement
const notFoundContainer = document.querySelector('.js-exercises__not-found') as HTMLElement

let paginationBtns: NodeListOf<HTMLButtonElement>;

let currentListType: 'exercises' | 'subtypeExercises' = 'exercises';

export function renderMarkup(listType: string, filtername:string, exercise:string) {
    if (listType === 'exercises') {
    fetchFilterExercises(initialFilter)
    .then(({ totalPages, results }) => {
        currentListType = listType
        
        exercisesList.innerHTML = createMarkupForExercises(results)
        
        toggleStylesExercises(listType)
        updatePagination(totalPages)
    })
    .catch(err => console.log(err))    
    } else if (listType === 'subtypeExercises') {
    fetchSubtypeExercises(filtername, exercise, initialFilter.currentPage)
    .then(({ results, totalPages }) => {
        
        initialFilter.filterName = filtername
        initialFilter.exercises = exercise    
        
        currentListType = listType

        if (results.length) {
            subtypeExercisesList.innerHTML = createMarkupForSubtypeExercises(results)
            notFoundContainer.style.display = 'none'
            paginationList.style.display = 'flex'
        } else {
            subtypeExercisesList.innerHTML = ''
            notFoundContainer.style.display = 'flex'
            paginationList.style.display = 'none'
        }    

        toggleStylesExercises(listType)
        updatePagination(totalPages)
    })
    .catch(err => console.log(err))
    }
}

function toggleStylesExercises(listType: string) {
    if (listType === 'exercises') {
        exercisesList.style.display = 'flex'
        subtypeExercisesList.style.display = 'none'
    } else if (listType === 'subtypeExercises') {
        exercisesList.style.display = 'none'
        subtypeExercisesList.style.display = 'flex'
    }
}

function updatePagination(totalPages:number) {
    if (totalPages <= 1) {
        paginationList.innerHTML = ''
    return
    } else {
        paginationList.innerHTML = createMarkupForExercisesPagination(totalPages);

        paginationBtns = document.querySelectorAll('.pagination__btn')
        paginationBtns[Number(initialFilter.currentPage)-1].classList.add('pagination__btn--active')
    } 
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
        renderMarkup(currentListType, initialFilter.filterName, initialFilter.exercises)
        paginationBtns.forEach(btn => btn.classList.remove('pagination__btn--active'))
    }
}

paginationList.addEventListener('click', pagination)
