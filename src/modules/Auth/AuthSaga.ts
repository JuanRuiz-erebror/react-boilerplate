import { put, takeLatest, fork, call } from 'redux-saga/effects'
import { setCookie } from 'utils/cookies'
import { LoginActionType } from './AuthActions'
import { LoginData } from './AuthDomain'
import { loginService } from './AuthService'

// login
function* loginSaga(action: any): any {
    const payload: LoginData = action.payload
    try {

        const response: any = yield call(loginService, payload)

        console.log('reposneee auth', response)
        setCookie('token', response.AccessToken)
        yield put({ type: LoginActionType.LOGIN_USER_SUCCESS, payload: response.AccessToken })

    } catch (error) {
        console.log('error auth', error)
        yield put({ type: LoginActionType.LOGIN_USER_ERROR, payload: 'error' })
    }
}
function* onLoginSubmitWatcher() {
    yield takeLatest(LoginActionType.LOGIN_USER, loginSaga)
}

export default [
    fork(onLoginSubmitWatcher),
]