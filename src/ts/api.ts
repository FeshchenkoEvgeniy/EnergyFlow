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

async function fetchSubtypeExercisesById(id: string) {
    const response = fetch(`${BASE_URL}/exercises/${id}`)
        .then(resp => {
        if (!resp.ok) {
            throw new Error(`${resp.statusText}`);
        }
            return resp.json()
        })
        .catch(err => console.log(err))
    return response 
}

async function subscriptionToNewExercises(email: string) {
    const options = {
    method: 'POST',
    body: JSON.stringify({email}),
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
    }

    try {
        const response = await fetch(`${BASE_URL}/subscription`, options);

        if (response.status === 409) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export {fetchQuote, fetchFilterExercises, fetchSubtypeExercises, fetchSubtypeExercisesById,subscriptionToNewExercises}