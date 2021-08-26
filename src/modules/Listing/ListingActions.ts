
export const ListingActionType = {
	// // listing
	LISTING_REQUEST: 'action/LISTING_REQUEST',
	LISTING_REQUEST_SUCCESS: 'action/LISTING_REQUEST_SUCCESS',
	LISTING_REQUEST_ERROR: 'action/LISTING_REQUEST_ERROR',
}

export const getListingAction = (payload?: string) => {
	return {
		type: ListingActionType.LISTING_REQUEST,
		payload
	}
};