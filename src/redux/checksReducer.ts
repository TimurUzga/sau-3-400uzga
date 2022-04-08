import {ActionsType} from "./store";

export type ChecksType = typeof initialState

export type CheckType = {
    title: string,
    idHeader: string,
    idCheck: string,
    pageNumber: number,
    paginatorNumber: number
    typesOfBlocks?: string[],
    numbersOfContacts?: string[]
    controlFunction: (inputValue: string) => boolean
    valuesOfBlocks?: number[]

}

const f1 = (inputValue: string) => {
    if (+inputValue < 0.25) return false
    else return true
}


const initialState = {
    "head1": [
        {
            title: "Проверка нулевых сигналов",
            idHeader: "1",
            idCheck: 'check1',
            pageNumber: 473,
            paginatorNumber: 1,
            typesOfBlocks: ['ВПК', 'ВБК'],
            numbersOfContacts: ['U21/11 Ш35', 'U24/11 Ш35'],
            controlFunction: f1,
            valuesOfBlocks: [1, 2, 3, 4]


        } as CheckType,
        {
            title: "Проверка коэффициента передачи ВГМ 103-1",
            idHeader: "1",
            idCheck: 'check2',
            pageNumber: 474,
            paginatorNumber: 2,
            typesOfBlocks: ['ВПК', 'ВБК'],
            numbersOfContacts: ['U2/11 Ш35']

        } as CheckType,
        {
            title: "Проверка масштабов",
            idHeader: "1",
            idCheck: 'check3',
            pageNumber: 475,
            paginatorNumber: 3

        } as CheckType

    ],
    "head2": [
        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости тангажа",
            idCheck: 'check4',
            pageNumber: 480,
            paginatorNumber: 4


        } as CheckType,

        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости курса",
            idCheck: 'check5',
            pageNumber: 482,
            paginatorNumber: 5


        } as CheckType,

        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости крена",
            idCheck: 'check6',
            pageNumber: 483,
            paginatorNumber: 6


        } as CheckType,

    ],

}


export const checksReducer = (state: ChecksType = initialState, action: ActionsType): any => {

    switch (action.type) {
        case 'SAVE_DATA':
            return {...state,
                // @ts-ignore
                [action.head]: state[action.head].map((ch: CheckType)=>{
                    if(ch.idCheck === action.idCheck) return {...ch, valuesOfBlocks:action.data}
                    else return ch;
                })
            }

        default:
            return state
    }
}


export const saveDataAC = (data: number[], head: string, idCheck: string) => ({
    type: 'SAVE_DATA',
    data,
    head,
    idCheck
}) as const


export default checksReducer;