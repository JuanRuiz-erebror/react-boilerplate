import { all } from 'redux-saga/effects';

import authenticationSagas from 'modules/Auth/AuthSaga';
import listinSagas from 'modules/Listing/ListingSaga';

export default function* startForman() {
	yield all([
		...authenticationSagas,
		...listinSagas,
	]);
}