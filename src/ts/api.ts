import {IFilter} from './interface'

const BASE_URL = 'https://energyflow.b.goit.study/api';

async function fetchQuote() {
    const response = fetch(`${BASE_URL}/quote`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(`${resp.statusText}`)
            }
            return resp.json()
        })
        .catch(err => console.log(err))
    return response
}

async function fetchExercises({filterName, currentPage}:IFilter) {
    const response = fetch(`${BASE_URL}/filters?filter=${filterName}&page=${currentPage}&limit=${12}`)
        .then(resp => {
        if (!resp.ok) {
            throw new Error(`${resp.statusText}`);
        }
            return resp.json()
        })
        .catch(err => console.log(err))
    return response
}

export {fetchQuote, fetchExercises}