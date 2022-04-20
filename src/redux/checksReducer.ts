import {ActionsType} from "./store";

export type ChecksType = { [head: string]: CheckType[] }

// type ControlFunctionType = (inputValue: string, channel: string, indexOfTable: number) => boolean


export type CheckType = {
    title: string
    idHeader: string
    idCheck: string
    pageNumber: number
    paginatorNumber: number
    typesOfBlocks: string[]
    typesOfSubBlocks: string[]
    resistors: string[]
    numbersOfContacts: string[]
    controlFunctions: number[]
    controlValues: number[]
    valuesOfErrors: number[]
    // valuesOfBlocks?: number[][]
    valuesOfBlocks: { 'channel1': string, 'channel2': string, 'channel3': string, 'channel4': string }[]

    isHaveSettings: boolean[]
    directionsOfChecks?: string[]
    subBlocks?: string[]

}

export function f1(inputValue: string, channel: string, indexOfTable: number = 0) {

    if(inputValue===''){
        return true
    }

    // @ts-ignore
    return (+inputValue <= this.controlValues[indexOfTable] + this.valuesOfErrors[indexOfTable]
        // @ts-ignore
        && +inputValue >= this.controlValues[indexOfTable] - this.valuesOfErrors[indexOfTable])
}

export function f0(inputValue: string, channel: string, indexOfTable: number = 0) {
    return true
}

export function f2(inputValue: string, channel: string, indexOfTable: number = 0) {

    if(inputValue===''){
        return true
    }

    // @ts-ignore.
    return f1.call(this, +inputValue / this.valuesOfBlocks[0][channel], channel, indexOfTable)

}


export const numToFunc = {
    0: f0,
    1: f1,
    2: f2
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
            typesOfSubBlocks: ['2', '2'],
            resistors: ['2', '2'],
            numbersOfContacts: ['U21/11 Ш35', 'U24/11 Ш35'],
            // controlFunctions: [f1, f1],
            controlFunctions: [1, 1],
            controlValues: [0, 0],
            valuesOfErrors: [0.25, 0.1],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}]
            ,
            isHaveSettings: [false, true]


        } as CheckType,
        {
            title: "Проверка коэффициента передачи ВГМ 103-1",
            idHeader: "1",
            idCheck: 'check2',
            pageNumber: 474,
            paginatorNumber: 2,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['2', '2'],
            resistors: ['2', '2'],
            numbersOfContacts: [
                'U23/11 Ш35', 'U24/11 Ш35',
                'U23/11 Ш35', 'U24/11 Ш35'
            ],
            // controlFunctions: [f0, f2, f0, f2],
            controlFunctions: [0, 2, 0, 2],
            controlValues: [0, 2.25, 0, 2.25,],
            valuesOfErrors: [0, 0.05, 0, 0.05],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}
            ],
            directionsOfChecks: [
                'Вправо/вверх и 2Т', 'Вправо/вверх и 2Т',
                'Влево/вниз и 2Т', 'Влево/вниз и 2Т',
            ],
            isHaveSettings: [false, true, false, true],

        } as CheckType,
        {
            title: "Проверка масштабов",
            idHeader: "1",
            idCheck: 'check3',
            pageNumber: 475,
            paginatorNumber: 3,
            typesOfBlocks: ['ВПК', 'ВПК', 'ВПК', 'ВПК', 'ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['', ''],
            resistors: ['', ''],
            numbersOfContacts: [
                'U26/11 Ш35', 'U20/11 Ш35',
                'U26/11 Ш35', 'U20/11 Ш35',
                'U26/11 Ш35', 'U26/11 Ш35',
                'U24/11 Ш35', 'U24/11 Ш35'
            ],
            // controlFunctions: [f1, f1, f1, f1, f0, f0, f0, f0],
            controlFunctions: [1, 1, 1, 1, 1, 1, 1, 1],
            controlValues: [3.5, -3.5, 3.5, -3.5, -1.89, 1.89, -2.24, 2.24],
            valuesOfErrors: [0.35, 0.35, 0.35, 0.35, 0.21, 0.21, 0.21, 0.21],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],

            directionsOfChecks: [
                'На кабрирование', 'На кабрирование',
                'На пикирование', 'На пикирование',
                'Вправо', 'Влево',
                'Вправо', 'Влево'],
            isHaveSettings: [true, true, true, true, true, true, true, true]

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


export const checksReducer = (state: any = initialState, action: ActionsType): any => {

    switch (action.type) {
        case 'SAVE_DATA':
            return {
                ...state,
                [action.head]: state[action.head].map((check: CheckType) => {
                    if (check.idCheck === action.idCheck) {
                        return {
                            ...check, valuesOfBlocks: check.valuesOfBlocks?.map((data, i) => {
                                if (i === action.indexOfTable) {
                                    // debugger
                                    return {
                                        ...data,
                                        'channel1': action.data[0],
                                        'channel2': action.data[1],
                                        'channel3': action.data[2],
                                        'channel4': action.data[3]
                                    }

                                }
                                return data
                            })
                        }
                    } else return check;
                })
            }

        case 'NEW_DATA':
            return initialState

        default:
            return state
    }





}


export const saveDataAC = (data: string[], head: string, idCheck: string, indexOfTable: number) => ({
    type: 'SAVE_DATA',
    data,
    head,
    idCheck,
    indexOfTable
}) as const

export const saveNewDataAC = () => ({
    type: 'NEW_DATA',
}) as const




export default checksReducer;