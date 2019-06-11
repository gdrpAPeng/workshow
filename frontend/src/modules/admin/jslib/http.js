import axios from 'axios'

const instance = axios.create({
    timeout: 10000
})

instance.interceptors.request.use(function(config) {
    return config
}, function(err) {
    return Promise.reject(err)
})

instance.interceptors.response.use(function(response) {
    return response
}, function(err) {
    return Promise.reject(err)
})

export default instance