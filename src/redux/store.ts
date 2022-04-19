import {combineReducers, createStore} from "redux";
import headerReducer from "./headerReducer";
import checksReducer, {saveDataAC, saveNewDataAC} from "./checksReducer";
import reportReducer, {addSettingsInReportAC} from "./reportReducer";
import appReducer, {loginAppAC, logoutAppAC} from "./appReducer";
import {
    loadChecksState,
    loadReportState,
    loadState,
    saveChecksState,
    saveReportState,
    saveState
} from "../utils/localStorage";


let rootReducer = combineReducers({
    header: headerReducer,
    checks:checksReducer,
    report: reportReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer,{...rootReducer,checks:loadChecksState()});



store.subscribe(() => {
    saveChecksState(store.getState())
    saveReportState(store.getState())
})


export type ActionsType = ReturnType<typeof saveDataAC>
    | ReturnType<typeof addSettingsInReportAC>
    | ReturnType<typeof loginAppAC>
    | ReturnType<typeof logoutAppAC>
    | ReturnType<typeof saveNewDataAC>


export type StoreType = typeof store

//@ts-ignore
window.store = store

export default store

