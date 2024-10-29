interface IFilter{
    filterName: string,
    exercises: string,
    currentPage: string,
}

interface IExerciseFilter{
    filtername: string,
    exercise: string
}

interface IResultExercises {
    name: string,
    filter: string,
    imgUrl: string,
}

interface ISubtypeExercise{
    bodyPart: string,
    burnedCalories: number,
    name: string,
    rating: number,
    target: string,
    time: number,
    _id: string
}

export type {IFilter, IResultExercises, IExerciseFilter, ISubtypeExercise}