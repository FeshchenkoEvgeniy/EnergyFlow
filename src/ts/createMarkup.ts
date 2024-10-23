import { IResultExercises } from './interface'

function createMarkupForExercises(results: IResultExercises[]): string {
    return results.map(({ name, filter, imgUrl }) => {
        return `
        <li class='exercises__item' data-filterName='${name}' style='background: linear-gradient(0deg, rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%), url(${imgUrl}) lightgray -16.825px 0.844px / 121.36% 108.504% no-repeat;'>
        <h3 class='exercises__item-title'>${name}</h3>
        <p class='exercises__item-filter'>${filter}</p>
        </li>
        `
    }).join('')
}

function createMarkupForExercisesPagination(totalPages: number) {
    let str = ''
    for (let i = 1; i <= totalPages; i++) {
        str += `<li data-page='${i}' class='pagination__item'><button class='pagination__btn'>${i}</button></li>`
    }
    return str
}

export { createMarkupForExercises, createMarkupForExercisesPagination }

    