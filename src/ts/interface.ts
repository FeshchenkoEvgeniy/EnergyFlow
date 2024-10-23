interface IFilter{
    filterName: string,
    currentPage: string
}

interface IResultExercises {
    name: string,
    filter: string,
    imgUrl: string,
}

export type {IFilter, IResultExercises}