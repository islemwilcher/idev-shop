
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8001/api' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('idevProfile')) {
        req.headers.token = `Bearer ${JSON.parse(localStorage.getItem('idevProfile')).token}`;
    }
    return req;
});

//auth
export const signIn = (formData) => API.post('/auth/signin', formData)
export const signUp = (formData) => API.post('/auth/signup', formData)

//products
export const fetchProducts = () => API.get('/products')
export const fetchProduct = (id) => API.get(`/products/find/${id}`)

export const neWProducts = () => API.get('/products/new')
export const allNEWProducts = () => API.get('/products/new/all')

export const besTProducts = () => API.get('/products/top')
export const allBESTProducts = () => API.get('/products/top/all')

export const createProduct = (product) => API.post('/products', product)
export const updateProduct = (id, updatedProduct) => API.patch(`/products/${id}`, updatedProduct)
export const deleteProduct = (id) => API.delete(`/products/${id}`)

//categories
export const fetchCategories = () => API.get('/categories')
export const fetchCategory = (id) => API.get(`/categories/find/${id}`)

export const createCategory = (category) => API.post('/categories', category)
export const updateCategory = (id, updatedCategory) => API.patch(`/categories/${id}`, updatedCategory)
export const deleteCategory = (id) => API.delete(`/categories/${id}`)
