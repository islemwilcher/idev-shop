
import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ cat, filters }) => {

    const [products, setProducts] = useState([])
    const [filtredProducts, setFiltredProducts] = useState([])

    useEffect(() => {
        //get products from api
        const getProducts = async () => {
            try {
                const res = await axios.get(cat 
                    ? `http://localhost:8001/api/products?category=${cat}`
                    : "http://localhost:8001/api/products"
                )
                setProducts(res.data)
            } catch (error) {
                
            }
        }
        getProducts()
    }, [cat])

    useEffect(() => {
        cat && setFiltredProducts(
            products.filter((item) => 
            Object.entries(filters).every(([key, value]) => 
                item[key].includes(value)
            )
            )
        )
    }, [cat, filters, products])

    return (
        <Container>
            {filtredProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
