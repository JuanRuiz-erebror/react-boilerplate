import { LoginData } from "./AuthDomain"


export const LoginActionType = {
    // login
    LOGIN_USER: 'action/LOGIN_USER',
    LOGIN_USER_SUCCESS: 'action/LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR: 'action/LOGIN_USER_ERROR',
    // // listing
    // LISTING_REQUEST: 'action/LISTING_REQUEST',
    // LISTING_REQUEST_SUCCESS: 'action/LISTING_REQUEST_SUCCESS',
    // LISTING_REQUEST_ERROR: 'action/LISTING_REQUEST_ERROR',
}

export const loginUserAction = (payload: LoginData) => {
    return {
        type: LoginActionType.LOGIN_USER,
        payload
    }
}