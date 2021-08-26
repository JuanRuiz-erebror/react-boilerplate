import { put, takeLatest, fork, call } from 'redux-saga/effects';

import { createApiCall, listingRoute, MethodType } from 'utils/Api';
import { ListingActionType } from './ListingActions';

// login
function* getListingSaga(action: any): any {

	const payload = action.payload
	try {

		const response: any = yield call(
			createApiCall, { method: MethodType.GET, uri: `${listingRoute}${payload ? `?timestamp=${payload}` : ''}`, data: undefined, auth: true }
		)

	} catch (error) {
		yield put({ type: ListingActionType.LISTING_REQUEST_ERROR, payload: error })
	}
}
function* onListingWatcher() {
	yield takeLatest(ListingActionType.LISTING_REQUEST, getListingSaga);;
}

export default [
	fork(onListingWatcher)
]