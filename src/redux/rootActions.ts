import * as ListingActions from "modules/Listing/ListingActions";
import * as AuthenticationActions from 'modules/Auth/AuthActions'



export interface Action<T> {
    type: any;
    payload: T;
}

export const ActionCreators = Object.assign({},
    {
        ...ListingActions,
        ...AuthenticationActions
    });
