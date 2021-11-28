
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8001/api' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('idev-profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('idev-profile')).token}`
    }

    return req
})

//auth
export const signIn = (formData) => API.post('/auth/signin', formData)
export const signUp = (dormData) => API.post('/auth/signup', dormData)

//products
export const fetchProducts = () => API.get('/products')
export const fetchProduct = (id) => API.get(`/products/find/${id}`)
export const createProduct = (newProduct) => API.post('/products', newProduct)
export const updateProduct = (id, updatedProduct) => API.patch(`/products/${id}`, updatedProduct)
export const deleteProduct = (id) => API.delete(`/products/${id}`)

//categories
export const fetchCategories = () => API.get('/categories')
export const fetchCategory = (id) => API.get(`/categories/find/${id}`)
export const createCategory = (newCategory) => API.post('/categories', newCategory)
export const updateCategory = (id, updatedCategory) => API.patch(`/categories/${id}`, updatedCategory)
export const deleteCategory = (id) => API.delete(`/categories/${id}`)

