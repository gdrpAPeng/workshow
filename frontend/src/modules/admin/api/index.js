import request from '../jslib/http'

export const test = (params) => {
    return request({
        method: 'get',
        params
    })
}