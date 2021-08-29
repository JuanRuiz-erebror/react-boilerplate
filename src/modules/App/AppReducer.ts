import createReducer from "redux/createReducer"
import { Action } from "redux/rootActions"
import { AppActionsType } from "./AppActions"

export interface AppReducerType {
    darkTheme?: boolean
}

export const initialAppState: AppReducerType = { darkTheme: true }

export const appReducer = createReducer<AppReducerType>(initialAppState, {

    [AppActionsType.SET_DARK_THEME](state: AppReducerType, action: Action<any>) {
        return {
            ...state,
            darkTheme: action.payload.darkTheme
        }
    }
})