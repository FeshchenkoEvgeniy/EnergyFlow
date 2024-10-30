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

async function fetchFilterExercises({filterName, currentPage}:IFilter) {
    const response = fetch(`${BASE_URL}/filters?filter=${filterName}&page=${currentPage}&limit=12`)
        .then(resp => {
        if (!resp.ok) {
            throw new Error(`${resp.statusText}`);
        }
            return resp.json()
        })
        .catch(err => console.log(err))
    return response
}

async function fetchSubtypeExercises(filtername: string, exercise: string, currentPage: string) {
    let newFilterName: string = ''
    if (filtername === 'body parts' && filtername.endsWith('s')) {
        const joinedFilterName = filtername.split(' ').join('')
        newFilterName = joinedFilterName.slice(0,joinedFilterName.length-1)
    } else {
        newFilterName = filtername
    }
    const response = fetch(`${BASE_URL}/exercises?${newFilterName}=${exercise}&page=${currentPage}&limit=12`)
        .then(resp => {
        if (!resp.ok) {
            throw new Error(`${resp.statusText}`);
        }
            return resp.json()    
        })
        .catch(err => console.log(err))
    return response
}

export {fetchQuote, fetchFilterExercises, fetchSubtypeExercises}