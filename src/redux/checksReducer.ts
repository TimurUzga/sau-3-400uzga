import {ActionsType} from "./store";
import {loadChecksState} from "../utils/localStorage";


export type ChecksType = { [head: string]: CheckType[] }
// export type ChecksType = typeof initialState

// type ControlFunctionType = (inputValue: string, channel: string, indexOfTable: number) => boolean

export type CheckType = {
    title: string
    idHeader: string
    idCheck: string
    pageNumber: number
    paginatorNumber: number
    typesOfBlocks: string[]
    typesOfSubBlocks: string[]
    positionOfSubBlock: string[]
    resistors: string[]
    numbersOfContacts: string[]
    controlFunctions: number[]
    controlValues: number[]
    valuesOfErrors: number[]
    // valuesOfBlocks: { 'channel1': string, 'channel2': string, 'channel3': string, 'channel4': string }[]
    valuesOfBlocks: { [key:string]: string}[]
    isHaveSettings: boolean[]
    directionsOfChecks?: string[]
    subBlocks?: string[]
    // recomendValues?:number[]

}

export function compareFunc(numberOfPlane: string, inputValue: string, channel: string, indexOfTable: number = 0) {

    debugger

    if (inputValue === '') {
        return true
    }



    // @ts-ignore
    return (+inputValue <= this.controlValues[indexOfTable] + this.valuesOfErrors[indexOfTable]
        // @ts-ignore
        && +inputValue >= this.controlValues[indexOfTable] - this.valuesOfErrors[indexOfTable])
}

export function emptyFunc() {
    return true
}

export function dividerFunc(numberOfPlane: string, inputValue: string, channel: string, indexOfTable: number = 0,) {
debugger
    if (inputValue === '') {
        return true
    }

    // @ts-ignore.
    return compareFunc.call(this, numberOfPlane,+inputValue / this.valuesOfBlocks[indexOfTable - 1][channel], channel, indexOfTable)
}

export function subtractionFunc(numberOfPlane: string, inputValue: string, channel: string, indexOfTable: number = 0) {

    if (inputValue === '') {
        return true
    }

    // @ts-ignore.
    return compareFunc.call(this, +inputValue - this.valuesOfBlocks[indexOfTable - 1][channel], channel, indexOfTable)
}
//
// export function universalFunc(numberOfPlane: string, inputValue: string, channel: string, indexOfTable: number = 0) {
//
//     if (inputValue === '') {
//         return true
//     }
//     debugger
//     let value = 0
//     if (indexOfTable === 2 || indexOfTable === 3) value = loadChecksState(numberOfPlane).head1[0].valuesOfBlocks[0][channel]
//     if (indexOfTable === 6 || indexOfTable === 7) value = loadChecksState(numberOfPlane).head1[0].valuesOfBlocks[1][channel]
//
//     // @ts-ignore.
//     return compareFunc.call(this, numberOfPlane, (+inputValue - value), channel, indexOfTable)
// }

export function universalFunc(numberOfPlane: string, inputValue: string, channel: string, indexOfTable: number = 0,name:string) {

    if (inputValue === '') {
        return true
    }
    debugger
    let value = 0
    if (name==='Х14') value = loadChecksState(numberOfPlane).head1[0].valuesOfBlocks[0][channel]
    if (name==='Х15') value = loadChecksState(numberOfPlane).head1[0].valuesOfBlocks[1][channel]

    // @ts-ignore.
    return compareFunc.call(this, numberOfPlane, (+inputValue - value), channel, indexOfTable)
}

export const numToFunc = {
    0: emptyFunc,
    1: compareFunc,
    2: dividerFunc,
    3: universalFunc,
    4: subtractionFunc
}


const initialState = {
    "head1": [
        {
            title: "Проверка нулевых сигналов.",
            idHeader: "1",
            idCheck: 'check1',
            pageNumber: 473,
            paginatorNumber: 1,
            typesOfBlocks: ['ВПК', 'ВБК'],
            typesOfSubBlocks: ['', 'ВГМ103-1'],
            positionOfSubBlock: ['', 'X14'],
            resistors: ['', 'R4'],
            numbersOfContacts: ['U21/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [1, 1],
            controlValues: [0, 0],
            valuesOfErrors: [0.25, 0.1],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}],
            isHaveSettings: [false, true]


        } as CheckType,
        {
            title: "Проверка коэффициента передачи ВГМ 103-1.",
            idHeader: "1",
            idCheck: 'check2',
            pageNumber: 474,
            paginatorNumber: 2,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['', 'ВГМ 103-1', '', 'ВГМ 103-1'],
            positionOfSubBlock: ['', 'Х14', '', 'X14'],
            resistors: ['', 'R6', '', 'R6'],
            numbersOfContacts: [
                'U23/11 Ш35', 'U24/11 Ш35',
                'U23/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [0, 2, 0, 2],
            controlValues: [0, 2.25, 0, 2.25,],
            valuesOfErrors: [0, 0.05, 0, 0.05],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}],
            directionsOfChecks: [
                'Вправо/вверх и 2Т', 'Вправо/вверх и 2Т',
                'Влево/вниз и 2Т', 'Влево/вниз и 2Т',],
            isHaveSettings: [false, true, false, true],

        } as CheckType,
        {
            title: "Проверка масштабов.",
            idHeader: "1",
            idCheck: 'check3',
            pageNumber: 475,
            paginatorNumber: 3,
            typesOfBlocks: ['ВПК', 'ВПК', 'ВПК', 'ВПК', 'ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['ВИ-78', 'ВИ-78', 'ВИ-78', 'ВИ-78', 'ВИ-78', 'ВИ-78', 'БС-47', 'БС-47'],
            positionOfSubBlock: ['Х13', 'Х13', 'Х14', 'X14', 'Х21', 'Х21', 'Х15', 'X15'],
            resistors: ['R1', 'R1', 'R1', 'R1', 'R1', 'R1', 'R3', 'R3'],
            numbersOfContacts: [
                'U26/11 Ш35', 'U26/11 Ш35',
                'U20/11 Ш35', 'U20/11 Ш35',
                'U26/11 Ш35', 'U26/11 Ш35',
                'U24/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [1, 1, 3, 3, 1, 1, 3, 3],
            controlValues: [3.5, -3.5, -3.5, 3.5, -1.89, 1.89, -2.24, 2.24],
            valuesOfErrors: [0.35, 0.35, 0.35, 0.35, 0.21, 0.21, 0.21, 0.21],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},],
            additionalValues: [],
            directionsOfChecks: [
                'На кабрирование', 'На пикирование',
                'На кабрирование', 'На пикирование',
                'Вправо', 'Влево',
                'Вправо', 'Влево'],
            isHaveSettings: [true, true, true, true, true, true, true, true]

        } as CheckType

    ],
    "head2": [
        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости тангажа.",
            idCheck: 'check4',
            pageNumber: 480,
            paginatorNumber: 4,
            typesOfBlocks: ['ВПК', 'ВПК',],
            typesOfSubBlocks: ['СУ-73', 'СУ-73'],
            positionOfSubBlock: ['Х8', 'Х8'],
            resistors: ['R9', 'R9'],
            numbersOfContacts: ['U31/11 Ш35', 'U31/11 Ш35'],
            controlFunctions: [1, 1],
            controlValues: [-0.5, 0.5],
            valuesOfErrors: [0.1, 0.1],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},],
            additionalValues: [],
            directionsOfChecks: ['На пикирование', 'На кабрирование'],
            isHaveSettings: [true, true]
        } as CheckType,

        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости курса.",
            idCheck: 'check5',
            pageNumber: 482,
            paginatorNumber: 5,
            typesOfBlocks: ['ВПК', 'ВПК',],
            typesOfSubBlocks: ['СУ-73', 'СУ-73'],
            positionOfSubBlock: ['Х8', 'Х8'],
            resistors: ['R7', 'R7'],
            numbersOfContacts: ['U31/11 Ш35', 'U31/11 Ш35'],
            controlFunctions: [1, 1],
            controlValues: [-1.6, 1.6],
            valuesOfErrors: [0.3, 0.3],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},],
            additionalValues: [],
            directionsOfChecks: ['Вправо', 'Влево'],
            isHaveSettings: [true, true]
        } as CheckType,

        {
            idHeader: "2",
            title: "Проверка передаточного коэффициента по сигналу угловой скорости крена.",
            idCheck: 'check6',
            pageNumber: 483,
            paginatorNumber: 6,
            typesOfBlocks: ['ВБК', 'ВБК',],
            typesOfSubBlocks: ['ВО104-1', 'ВО104-1'],
            positionOfSubBlock: ['Х13', 'Х13'],
            resistors: ['R5', 'R5'],
            numbersOfContacts: ['U19/11 Ш37', 'U19/11 Ш37'],
            controlFunctions: [1, 1],
            controlValues: [-1.8, 1.8],
            valuesOfErrors: [0.3, 0.3],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},],
            additionalValues: [],
            directionsOfChecks: ['Влево', 'Вправо'],
            isHaveSettings: [true, true]
        } as CheckType,
    ],
    "head3": [
        {
            title: "Проверка срабатывания пороговых устройств по предельным значениям крена на высотах H > 200 м.",
            idHeader: "3",
            idCheck: 'check7',
            pageNumber: 486,
            paginatorNumber: 7,
            typesOfBlocks: ['ВБК', 'ВБК'],
            typesOfSubBlocks: ['УПО40-1', 'УПО40-1'],
            positionOfSubBlock: ['Х5', 'X5'],
            resistors: ['R1', 'R4'],
            numbersOfContacts: ['U47/11 Ш36', 'U23/11 Ш36'],
            controlFunctions: [1, 1],
            controlValues: [31, 31],
            valuesOfErrors: [3, 3],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}],
            directionsOfChecks: ['Вправо', 'Влево'],
            isHaveSettings: [true, true]
        } as CheckType,
        {
            title: "Проверка срабатывания пороговых устройств по предельным значениям крена на высотах ≤ 60 м.",
            idHeader: "3",
            idCheck: 'check8',
            pageNumber: 490,
            paginatorNumber: 8,
            typesOfBlocks: ['ВБК', 'ВБК'],
            typesOfSubBlocks: ['УПО40-1', 'УПО40-1'],
            positionOfSubBlock: ['Х5', 'X5'],
            resistors: ['R3', 'R6'],
            numbersOfContacts: ['U47/11 Ш36', 'U23/11 Ш36'],
            controlFunctions: [1, 1],
            controlValues: [4, 4],
            valuesOfErrors: [1, 1],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}],
            directionsOfChecks: ['Вправо', 'Влево'],
            isHaveSettings: [true, true]

        } as CheckType,
        {
            title: "Проверка срабатывания пороговых устройств по предельным значениям тангажа.",
            idHeader: "3",
            idCheck: 'check9',
            pageNumber: 493,
            paginatorNumber: 9,
            typesOfBlocks: ['ВПК', 'ВПК'],
            typesOfSubBlocks: ['УПО40-1', 'УПО40-1'],
            positionOfSubBlock: ['Х32', 'X32'],
            resistors: ['R4', 'R1'],
            numbersOfContacts: ['U6/19 Ш37', 'U5/19 Ш37'],
            controlFunctions: [1, 1],
            controlValues: [15, 10],
            valuesOfErrors: [2, 1.5],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}],
            directionsOfChecks: ['На кабрирование', 'На пикирование'],
            isHaveSettings: [true, true]
        } as CheckType

    ],
    "head4": [
        {
            title: "Проверка передаточного коэффициента на индекс команд по сигналу крена.",
            idHeader: "4",
            idCheck: 'check10',
            pageNumber: 498,
            paginatorNumber: 10,
            typesOfBlocks: ['ВБК', 'ВБК'],
            typesOfSubBlocks: ["СУ-79", "СУ-79"],
            positionOfSubBlock: ['Х20', 'X20'],
            resistors: ['R1', 'R1'],
            numbersOfContacts: ['U27/11 Ш37', 'U27/11 Ш37'],
            controlFunctions: [1, 1],
            controlValues: [5, 5],
            valuesOfErrors: [0.5, 0.5],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}],
            directionsOfChecks: ['Вправо', 'Влево'],
            isHaveSettings: [true, true]
        } as CheckType,
        {
            title: "Проверка передаточного коэффициента на индекс команд по сигналу тангажа.",
            idHeader: "4",
            idCheck: 'check11',
            pageNumber: 501,
            paginatorNumber: 11,
            typesOfBlocks: ['ВПК', 'ВПК'],
            typesOfSubBlocks: ['СУ-79', 'СУ-79'],
            positionOfSubBlock: ['Х21', 'X21'],
            resistors: ['R1', 'R1'],
            numbersOfContacts: ['U25/19 Ш37', 'U25/19 Ш37'],
            controlFunctions: [1, 1],
            controlValues: [5, 5],
            valuesOfErrors: [0.5, 0.5],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}],
            directionsOfChecks: ['На пикирование', 'На кабрирование'],
            isHaveSettings: [true, true]
        } as CheckType,
    ],
    "head5": [
        {
            title: "Проверка работы САУ в режиме ПРИВЕДЕНИЕ В ГОРИЗОНТ.",
            idHeader: "5",
            idCheck: 'check12',
            pageNumber: 498,
            paginatorNumber: 12,
            typesOfBlocks: ['ВБК', 'ВБК'],
            typesOfSubBlocks: ["ВГМ103-1", "УГР41-1"],
            positionOfSubBlock: ['Х14', 'X11'],
            resistors: ['R1', 'R3'],
            numbersOfContacts: ['U17/11 Ш35', 'U17/11 Ш35'],
            controlFunctions: [1, 1],
            controlValues: [5, 5],
            valuesOfErrors: [0.5, 0.5],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''}],
            directionsOfChecks: ['Вправо', 'Влево'],
            isHaveSettings: [true, true]
        } as CheckType,

    ],

    "head6": [
        {
            title: "Проверка масштабов по сигналам датчика положения элеронов.",
            idHeader: "6",
            idCheck: 'check13',
            pageNumber: 515,
            paginatorNumber: 13,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ["", "", "ВО104-01", "", "", "ВО104-01"],
            positionOfSubBlock: ['', '', 'X13', '', '', 'X13'],
            resistors: ['', '', 'R4', '', '', 'R4'],
            numbersOfContacts: ['U20/11 Ш35', 'U14/11 Ш35', 'U30/11 Ш35', 'U20/11 Ш35', 'U14/11 Ш35', 'U30/11 Ш35'],
            controlFunctions: [0, 0, 1, 0, 0, 1],
            controlValues: [0, 0, 0, 0, 0, 0],
            valuesOfErrors: [0, 0, 0.3, 0, 0, 0.3],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['Вправо', 'Вправо', 'Вправо', 'Влево', 'Влево', 'Влево'],
            isHaveSettings: [false, false, true, false, false, true,]
        } as CheckType,
    ],
    "head7": [
        {
            title: "Проверка передаточного коэффициента при управлении от ручки КРЕН.",
            idHeader: "7",
            idCheck: 'check14',
            pageNumber: 518,
            paginatorNumber: 14,
            typesOfBlocks: ['ВБК', 'ВБК'],
            typesOfSubBlocks: ['БС-47', 'БС-47'],
            positionOfSubBlock: ['Х15', 'Х15'],
            resistors: ['R5', 'R5'],
            numbersOfContacts: ['U24/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [1, 1],
            controlValues: [7.2, 7.2],
            valuesOfErrors: [0.4, 0.4],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['Вправо', 'Влево'],
            isHaveSettings: [true, true]
        } as CheckType,
    ],
    "head8": [
        {
            title: "Проверка передаточного коэффициента по сигналу ЗК.",
            idHeader: "8",
            idCheck: 'check15',
            pageNumber: 523,
            paginatorNumber: 15,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['ВГМ103-1', 'БС-47', 'ВГМ103-1', 'ВГМ103-1'],
            positionOfSubBlock: ['Х14', 'Х15', 'Х14', 'Х14'],
            resistors: ['R5', 'R2', 'R9', 'R8'],
            numbersOfContacts: ['U24/11 Ш35', 'U24/11 Ш35', 'U25/11 Ш35', 'U25/11 Ш35'],
            controlFunctions: [1, 1, 1, 1],
            controlValues: [0, 3.2, 5.8, 5.8,],
            valuesOfErrors: [0.1, 0.3, 0.1, 0.1,],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['', '10° по часовой', '90° по часовой', '270° против часовой'],
            isHaveSettings: [true, true, true, true]
        } as CheckType,
    ],
    "head9": [
        {
            title: "Проверка центровки канала крена в режиме ЗАХОД.",
            idHeader: "9",
            idCheck: 'check16',
            pageNumber: 532,
            paginatorNumber: 16,
            typesOfBlocks: ['ВБК', 'ВБК'],
            typesOfSubBlocks: ['УГР41-1', 'ВКП-100'],
            positionOfSubBlock: ['Х11', 'Х12'],
            resistors: ['R2', 'R7'],
            numbersOfContacts: ['U22/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [1, 1],
            controlValues: [0, 0],
            valuesOfErrors: [0.1, 0.1],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['', ''],
            isHaveSettings: [true, true]
        } as CheckType,

        {
            title: "Проверка масштаба и ограничения по сигналу отклонения от равносигнальной линии курса Ек.",
            idHeader: "9",
            idCheck: 'check17',
            pageNumber: 534,
            paginatorNumber: 17,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК', 'ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['', 'ВКП-100', '', 'ВКП-100', 'УГР41-1', 'УГР41-1', 'УГР41-1', 'УГР41-1'],
            positionOfSubBlock: ['', 'Х12', '', 'Х12', 'X11', 'Х11', 'X11', 'Х11'],
            resistors: ['', 'R5', '', 'R5', 'R6', 'R7', 'R6', 'R7'],
            numbersOfContacts: [
                'U5/6 Ш35', 'U22/11 Ш35', 'U5/6 Ш35', 'U22/11 Ш35',
                'U5/6 Ш35', 'U22/11 Ш35', 'U5/6 Ш35', 'U22/11 Ш35'],
            controlFunctions: [0, 2, 0, 2, 1, 1, 1, 1],
            controlValues: [0, 35, 0, 35, 10, 7, -10, 7],// 10+-9.8>=0.2В
            valuesOfErrors: [0, 3.5, 0, 35, 9.8, 0.7, 9.8, 0.7],
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
                'вправо/вверх и 2Т', 'вправо/вверх и 2Т', 'влево/вниз и 2Т', 'влево/вниз и 2Т',
                'вправо/вверх и 7Т', 'вправо/вверх и 7Т', 'влево/вниз и 7Т', 'влево/вниз и 7Т',
            ],
            isHaveSettings: [false, true, false, true, true, true, true, true]
        } as CheckType,

        {
            title: "Проверка передаточного коэффициента по сигналу Ек.",
            idHeader: "9",
            idCheck: 'check18',
            pageNumber: 536,
            paginatorNumber: 18,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['', 'ВКП-100', '', 'ВКП-100'],
            positionOfSubBlock: ['', 'Х12', '', 'Х12'],
            resistors: ['', 'R8', '', 'R8'],
            numbersOfContacts: [
                'U5/6 Ш35', 'U24/11 Ш35', 'U5/6 Ш35', 'U24/11 Ш35'
            ],
            controlFunctions: [0, 2, 0, 2],
            controlValues: [0, 19, 0, 19],
            valuesOfErrors: [0, 2, 0, 2],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: [
                'вправо и 2Т', 'вправо и 2Т', 'влево и 2Т', 'влево и 2Т'
            ],
            isHaveSettings: [false, true, false, true]
        } as CheckType,
        {
            title: "Проверка передаточного коэффициента по сигналу Ек после захвата глиссады.",
            idHeader: "9",
            idCheck: 'check19',
            pageNumber: 537,
            paginatorNumber: 19,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['', 'ВКП-100', '', 'ВКП-100'],
            positionOfSubBlock: ['', 'Х12', '', 'Х12'],
            resistors: ['', 'R8', '', 'R8'],
            numbersOfContacts: [
                'U5/6 Ш35', 'U24/11 Ш35', 'U5/6 Ш35', 'U24/11 Ш35'
            ],
            controlFunctions: [0, 2, 0, 2],
            controlValues: [0, 19, 0, 19],
            valuesOfErrors: [0, 2, 0, 2],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: [
                'вправо и 2Т', 'вправо и 2Т', 'влево и 2Т', 'влево и 2Т'
            ],
            isHaveSettings: [false, true, false, true]
        } as CheckType,

        {
            title: "Проверка зоны нечувствительности по сигналу ΔΨзах.",
            idHeader: "9",
            idCheck: 'check20',
            pageNumber: 538,
            paginatorNumber: 20,
            typesOfBlocks: ['ВБК', 'ВБК'],
            typesOfSubBlocks: ['ВКП-100', 'ВКП-100'],
            positionOfSubBlock: ['Х12', 'Х12'],
            resistors: ['R5', 'R4'],
            numbersOfContacts: [
                'U23/11 Ш35', 'U23/11 Ш35'
            ],
            controlFunctions: [1, 1],
            controlValues: [17.5, 17.5],
            valuesOfErrors: [0.5, 0.5],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['вправо', 'влево'],
            isHaveSettings: [true, true]
        } as CheckType,

        {
            title: "Проверка передаточного коэффициента по сигналу ΔΨзах.",
            idHeader: "9",
            idCheck: 'check21',
            pageNumber: 540,
            paginatorNumber: 21,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['', 'ВКП-100', '', 'ВКП-100'],
            positionOfSubBlock: ['', 'Х12', '', 'Х12'],
            resistors: ['', 'R1', '', 'R1'],
            numbersOfContacts: [
                'U24/11 Ш35', 'U24/11 Ш35', 'U24/11 Ш35', 'U24/11 Ш35'
            ],
            controlFunctions: [0, 4, 0, 4],
            controlValues: [0, -0.8, 0, 0.8],
            valuesOfErrors: [0, 0.15, 0, 0.15],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['вправо', 'вправо', 'влево', 'влево'],
            isHaveSettings: [false, true, false, true]
        } as CheckType,

        {
            title: "Проверка ограничения заданного крена (γзад) на высотах менее 200м.",
            idHeader: "9",
            idCheck: 'check22',
            pageNumber: 541,
            paginatorNumber: 22,
            typesOfBlocks: ['ВБК', 'ВБК'],
            typesOfSubBlocks: ['', '',],
            positionOfSubBlock: ['', ''],
            resistors: ['', '',],
            numbersOfContacts: ['U24/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [1, 1],
            controlValues: [1.6, -1.6],
            valuesOfErrors: [0.2, 0.2],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['90° вправо', '90° влево'],
            isHaveSettings: [false, false]
        } as CheckType,

        {
            title: "Проверка срабатывания пороговых устройств по сигналу предельных отклонений Eк.",
            idHeader: "9",
            idCheck: 'check23',
            pageNumber: 543,
            paginatorNumber: 23,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['УГР-41', 'УГР-41', 'УГР-41', 'УГР-41'],
            positionOfSubBlock: ['Х11', 'Х11', 'Х11', 'Х11'],
            resistors: ['R8', 'R8', 'R4', 'R4',],
            numbersOfContacts: ['U1/11 Ш37', 'U1/11 Ш37', 'U2/11 Ш37', 'U2/11 Ш37'],
            controlFunctions: [1, 1, 1, 1],
            controlValues: [4, 0.15, 4, 0.15],
            valuesOfErrors: [1, 0.15, 1, 0.15],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['вправо и КР', 'вправо и 1Т', 'влево и КР', 'влево и 1Т'],
            isHaveSettings: [true, true, true, true]
        } as CheckType,
    ],

    "head10": [
        {
            title: "Проверка передаточного числа по сигналу γзад от А-821.",
            idHeader: "10",
            idCheck: 'check24',
            pageNumber: 546,
            paginatorNumber: 24,
            typesOfBlocks: ['ВБК', 'ВБК'],
            typesOfSubBlocks: ['ВГМ103-1', 'ВГМ103-1'],
            positionOfSubBlock: ['Х14', 'Х14'],
            resistors: ['R2', 'R2',],
            numbersOfContacts: ['U24/11 Ш35', 'U24/11 Ш35'],
            controlFunctions: [1, 1],
            controlValues: [4.4, -4.4],
            valuesOfErrors: [0.2, 0.2],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['15° вправо', '15° влево'],
            isHaveSettings: [true, true]
        } as CheckType,
    ],
    "head11": [
        {
            title: "Проверка центровки вычислителей канала КУРС.",
            idHeader: "11",
            idCheck: 'check25',
            pageNumber: 550,
            paginatorNumber: 25,
            typesOfBlocks: ['ВБК'],
            typesOfSubBlocks: ['ВН-77'],
            positionOfSubBlock: ['Х33'],
            resistors: ['R3'],
            numbersOfContacts: ['U31/11 Ш35'],
            controlFunctions: [1],
            controlValues: [0],
            valuesOfErrors: [0.95],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: [''],
            isHaveSettings: [true]
        } as CheckType,

        {
            title: "Проверка масштаба по сигналу nz.",
            idHeader: "11",
            idCheck: 'check26',
            pageNumber: 551,
            paginatorNumber: 26,
            typesOfBlocks: ['ВБК'],
            typesOfSubBlocks: ['ВН-77'],
            positionOfSubBlock: ['Х33'],
            resistors: ['R1'],
            numbersOfContacts: ['U31/11 Ш35'],
            controlFunctions: [1],
            controlValues: [2.5],
            valuesOfErrors: [0.2],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: [''],
            isHaveSettings: [true]
        } as CheckType,

        {
            title: "Проверка порога срабатывания вычислителей сравнения канала КУРС.",
            idHeader: "11",
            idCheck: 'check27',
            pageNumber: 552,
            paginatorNumber: 27,
            typesOfBlocks: ['ВБК', 'ВБК'],
            typesOfSubBlocks: ['УС27-3', 'УС27-3'],
            positionOfSubBlock: ['Х32', 'Х32'],
            resistors: ['R1', 'R1'],
            numbersOfContacts: ['', ''],
            controlFunctions: [1, 1],
            controlValues: [0, 0],
            valuesOfErrors: [0, 0],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['положение "2"', 'положение "1"'],
            isHaveSettings: [true, true]
        } as CheckType,

        {
            title: "Проверка передаточного числа по сигналу nz.",
            idHeader: "11",
            idCheck: 'check28',
            pageNumber: 553,
            paginatorNumber: 28,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['УС27-3', 'УС27-3', 'УС27-3'],
            positionOfSubBlock: ['Х32', 'Х32', 'Х32'],
            resistors: ['R6', 'R6', 'R6'],
            numbersOfContacts: ['', '', ''],
            controlFunctions: [1, 1, 1],
            controlValues: [6.7, 6.7, 6.7],
            valuesOfErrors: [1.3, 1.3, 1.3],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['', '', ''],
            isHaveSettings: [true, true, true]
        } as CheckType,

        {
            title: "Проверка порога срабатывания вычислителей сравнения канала КУРС.",
            idHeader: "11",
            idCheck: 'check29',
            pageNumber: 556,
            paginatorNumber: 29,
            typesOfBlocks: ['ВБК', 'ВБК'],
            typesOfSubBlocks: ['ВС-4-02', 'ВС-4-02'],
            positionOfSubBlock: ['Х31', 'Х31'],
            resistors: ['R1', 'R2'],
            numbersOfContacts: ['U21/11 Ш36', 'U21/11 Ш36'],
            controlFunctions: [1, 1],
            controlValues: [2.9, 2.9],
            valuesOfErrors: [1.1, 1.1],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['по часовой', 'против часовой'],
            isHaveSettings: [true, true]
        } as CheckType,

        {
            title: "Проверка центровки блока контроля сервопривода канала КУРСА.",
            idHeader: "11",
            idCheck: 'check30',
            pageNumber: 558,
            paginatorNumber: 30,
            typesOfBlocks: ['ВБК'],
            typesOfSubBlocks: ['БК33-1'],
            positionOfSubBlock: ['Х30'],
            resistors: ['R3'],
            numbersOfContacts: ['U29/11 Ш36'],
            controlFunctions: [1],
            controlValues: [0],
            valuesOfErrors: [0.2],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},

            ],
            directionsOfChecks: [''],
            isHaveSettings: [true, true]
        } as CheckType,

        {
            title: "Проверка порога срабатывания блока контроля сервопривода канала КУРС.",
            idHeader: "11",
            idCheck: 'check31',
            pageNumber: 558,
            paginatorNumber: 31,
            typesOfBlocks: ['ВБК', 'ВБК', 'ВБК', 'ВБК'],
            typesOfSubBlocks: ['БК33-1', 'БК33-1', 'БК33-1', 'БК33-1'],
            positionOfSubBlock: ['Х30', 'Х30', 'Х30', 'Х30'],
            resistors: ['R6', 'R5', 'R6', 'R5'],
            numbersOfContacts: ['', '', '', ''],
            controlFunctions: [1, 1, 1, 1],
            controlValues: [2.9, 2.9, 2.9, 2.9],
            valuesOfErrors: [1.1, 1.1, 1.1, 1.1],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['По часовой', 'Против часовой', 'По часовой', 'Против часовой'],
            isHaveSettings: [true, true, true, true]
        } as CheckType,

        {
            title: "Проверка обнуления блоков контроля сервопривода канала КУРС.",
            idHeader: "11",
            idCheck: 'check32',
            pageNumber: 560,
            paginatorNumber: 32,
            typesOfBlocks: ['ВБК', 'ВБК'],
            typesOfSubBlocks: ['БК33-1', 'БК33-1'],
            positionOfSubBlock: ['Х30', 'Х30'],
            resistors: ['R1', 'R2'],
            numbersOfContacts: ['U29/11 Ш36', 'U29/11 Ш36', ],
            controlFunctions: [1, 1],
            controlValues: [0, 0],
            valuesOfErrors: [0.5, 0.5],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['По часовой', 'Против часовой'],
            isHaveSettings: [true, true]
        } as CheckType,



    ],
    "head12": [
        {
            title: "Проверка масштабов по сигналам датчика положения руля высоты.",
            idHeader: "12",
            idCheck: 'check33',
            pageNumber: 576,
            paginatorNumber: 33,
            typesOfBlocks: ['ВПК', 'ВПК', 'ВПК', 'ВПК', 'ВПК', 'ВПК'],
            typesOfSubBlocks: ["", "", "ВИ-78", "", "", "ВИ-78"],
            positionOfSubBlock: ['', '', 'X25', '', '', 'X25'],
            resistors: ['', '', 'R4', '', '', 'R4'],
            numbersOfContacts: ['U36/19 Ш37', 'U14/11 Ш35', 'U31/11 Ш35', 'U36/19 Ш37', 'U14/11 Ш35', 'U31/11 Ш35'],
            controlFunctions: [0, 0, 1, 0, 0, 1],//?????????????????????????????????????????????????????
            controlValues: [0, 0, 0, 0, 0, 0],
            valuesOfErrors: [0, 0, 0.3, 0, 0, 0.3],
            valuesOfBlocks: [
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
                {'channel1': '', 'channel2': '', 'channel3': '', 'channel4': ''},
            ],
            directionsOfChecks: ['Вправо', 'Вправо', 'Вправо', 'Влево', 'Влево', 'Влево'],
            isHaveSettings: [false, false, true, false, false, true,]
        } as CheckType,
    ]

}

export const checksReducer = (state: ChecksType = initialState, action: ActionsType): ChecksType => {

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

        case 'SAVE_SINGLE_DATA':
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
                                        [action.channel]: action.value
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

        case 'CONTINUE_DATA': {


            // @ts-ignore
            return action.data;
        }
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


export const saveSingleDataAC = (value: string, head: string, idCheck: string, indexOfTable: number, channel: string) => ({
    type: 'SAVE_SINGLE_DATA',
    value,
    head,
    idCheck,
    indexOfTable,
    channel
}) as const

export const saveNewDataAC = (numberOfPlane: string) => ({
    type: 'NEW_DATA',
    numberOfPlane
}) as const

export const saveContinueChecksDataAC = (data: any) => ({
    type: 'CONTINUE_DATA',
    data
}) as const

export default checksReducer;