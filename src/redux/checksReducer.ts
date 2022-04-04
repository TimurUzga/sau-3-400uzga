

export type ChecksType =typeof initialState

export type CheckType = {
    title: string,
    idHeader: string,
    idTech: string,
    pageNumber: number,
}

const initialState = {
    "head1": [
        {
            title: "Название проверки 1",
            idHeader: "1",
            idTech: 'Tech1',
            pageNumber: 234,
        } as CheckType,
        {
            title: "Название проверки 2",
            idHeader: "1",
            idTech: 'Tech2',
            pageNumber: 235,
        } as CheckType
    ] ,
    "head2": [
        {
            idHeader: "1",
            title: "Название проверки 3",
            idTech: 'Tech3',
            pageNumber: 236,

        } as CheckType
    ] ,

}


export const checksReducer = (state: ChecksType = initialState): any => {
    return state
}

export default checksReducer;