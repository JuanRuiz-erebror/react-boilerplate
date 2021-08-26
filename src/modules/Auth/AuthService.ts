import { createApiCall, MethodType } from "utils/Api"

export const apiAuth = process.env.REACT_APP_API_AUTH_URL

export const loginService = async (payload: any) => {

    try {
        const uri = `${apiAuth}/login`
        console.log('ueeeeeeeeeeeeeeereer', uri, payload)
        const res = await createApiCall({ method: MethodType.POST, uri, data: payload })
        if (res.data) return res.data
        throw new Error('no data response')
    } catch (error) {
        throw new Error(error)
    }

}