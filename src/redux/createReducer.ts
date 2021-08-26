import { Reducer } from "redux";
import { Action } from "./rootActions";


export default function createReducer<S>(initialState: S, handlers: any) {
	const r = (state: S = initialState, action: Action<S>): S => {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	};

	return r
}
