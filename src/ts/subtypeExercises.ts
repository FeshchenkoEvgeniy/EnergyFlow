import { fetchSubtypeExercises } from "./api";
import { createMarkupForSubtypeExercises } from "./createMarkup";

const subtypeExercisesList = document.querySelector('.js-subtype-exercises__list') as HTMLElement
const exercisesList = document.querySelector('.js-exercises__list') as HTMLElement;

function onClick(evt: Event) {
    const target = evt.target as HTMLElement;
    exercisesList.style.display = 'none'

    if (target.classList.contains('exercises__list')) {
        return
    }
    const exercisesItem = target.closest('.exercises__item') as HTMLElement
    const { filtername = 'muscles', exercise='calves'} = exercisesItem.dataset

    fetchSubtypeExercises(filtername, exercise)
    .then(({ results }) => {
        subtypeExercisesList.innerHTML = createMarkupForSubtypeExercises(results)
    })
    .catch(err => console.log(err))
}

exercisesList.addEventListener('click', onClick)