
import createReducer from "redux/createReducer";
import { Action } from "redux/rootActions";
import { ListingActionType } from "./ListingActions";
import { Listing } from "./ListingDomain";


export interface ListingReducerType {
	list: Listing[];
	loading: boolean;
	error?: string;
	nextpage: string;
}
const defaultState: ListingReducerType = {
	list: [],
	loading: false,
	error: undefined,
	nextpage: ''
}



export const listingReducer = createReducer<ListingReducerType>(defaultState, {

	[ListingActionType.LISTING_REQUEST](state: ListingReducerType, action: Action<Listing[]>) {
		return {
			...state,
			loading: true,
		};
	},

	[ListingActionType.LISTING_REQUEST_ERROR](state: ListingReducerType, action: Action<any>) {

		return {
			...state,
			loading: false,
			error: action.payload,
		};
	},

	[ListingActionType.LISTING_REQUEST_SUCCESS](state: ListingReducerType, action: Action<Listing[]>) {

		return {
			...state,
			loading: false,
			list: action.payload,
		};
	},
});
