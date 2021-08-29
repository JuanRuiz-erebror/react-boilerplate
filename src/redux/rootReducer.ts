import { History } from "history";
import { combineReducers } from "redux";
import { routerReducer, RouterState } from 'react-router-redux'
import { listingReducer, ListingReducerType } from "modules/Listing/ListingReducer";
import { authenticationReducer, AuthenticationReducerType } from "modules/Auth/AuthReducer";
import { Action } from "./rootActions";
import createReducer from "./createReducer";
import { appReducer, AppReducerType } from "modules/App/AppReducer";


export interface RootState {
	listing: ListingReducerType
	loginForm: AuthenticationReducerType
	app: AppReducerType
	routerReducer: RouterState
}

export default (history: History) =>
	combineReducers({
		listing: listingReducer,
		loginForm: authenticationReducer,
		app: appReducer,
		routerReducer
	});





