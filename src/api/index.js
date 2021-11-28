
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8001/api' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('idev-profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('idev-profile')).token}`
    }

    return req
})

export const fetchProducts = () => API.get('/products')
export const fetchProduct = (id) => API.get(`/products/find/${id}`)
export const createProduct = (newProduct) => API.post('/products', newProduct)
export const updateProduct = (id, updatedProduct) => API.patch(`/products/${id}`, updatedProduct)
export const deleteProduct = (id) => API.delete(`/products/${id}`)

