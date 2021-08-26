import { getCookie } from 'utils/cookies';

export const apiBaseRoute = process.env.REACT_APP_API_URL;
export const apiAuth = process.env.REACT_APP_API_AUTH_URL;

export enum MethodType {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

export const loginRoute = `/login`
export const listingRoute = `/api/sale_listings`


export const createApiCall = async ({ method = 'GET', uri = '', data = {}, auth = false }) => {

	try {
		const headers: any = {
			"Content-Type": "application/json",
			//"Access-Control-Allow-Origin": "*",
			//"Access-Control-Allow-Method": "",
			//"Access-Control-Allow-Headers": "*",
			'User-Agent': 'IWO-FRONT'
		}

		if (auth) {
			headers["Authorization"] = getCookie('token')
		}

		// let options: any = { headers }

		// if (method === 'GET') {

		// } else if (method === 'POST') {

		// 	options.method = method
		// 	options.data = JSON.stringify(data)
		// 	options.url = uri
		// 	// axios.post(uri, data)
		// 	// 		.then(function (response) {
		// 	// 			console.log(response);
		// 	// 			return response
		// 	// 		})
		// 	// 		.catch(function (error) {
		// 	// 			console.log(error);
		// 	// 			return error
		// 	// 		});
		// 	// }
		// }
		// axios(options)

		const requestOptions: RequestInit = {
			//mode: 'no-cors',
			body: method === 'GET' ? undefined : JSON.stringify(data),
			//cache: "no-cache",
			headers,
			method
		}

		const response = await fetch(uri, requestOptions)

		console.log('response', response)
		if (!response.ok) {
			throw new Error('reponse no ok')
		}
		const result = await response.json()
		return result
	} catch (error) {
		throw new Error(error)
	}

}

