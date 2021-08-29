import { AppData } from "./AppDomain"

export enum AppActionsType {
    SET_DARK_THEME = 'SET_DARK_THEME'
}

export const setDarkThemeAction = (payload: AppData) => {
    return {
        type: AppActionsType.SET_DARK_THEME,
        payload
    }
}