import createReducer from "redux/createReducer";
import { Action } from "redux/rootActions";
import { LoginActionType } from "./AuthActions";
import { LoginData } from "./AuthDomain";

export interface AuthenticationReducerType {
    email: string;
    password: string;
    loading: boolean;
    error?: string;
    token: string;
}
const defaultState: AuthenticationReducerType = {
    email: '',
    password: '',
    loading: false,
    error: undefined,
    token: ''
}



export const authenticationReducer = createReducer<AuthenticationReducerType>(defaultState, {

    [LoginActionType.LOGIN_USER](state: AuthenticationReducerType, action: Action<LoginData>) {
        return {
            ...state,
            loading: true,
        };
    },

    [LoginActionType.LOGIN_USER_ERROR](state: AuthenticationReducerType, action: Action<number>) {

        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    },

    [LoginActionType.LOGIN_USER_SUCCESS](state: AuthenticationReducerType, action: Action<number>) {

        return {
            ...state,
            loading: false,
            error: null,
            token: action.payload,
        };
    },
});
