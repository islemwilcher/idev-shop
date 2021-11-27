
import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

const Wrapper = styled.div`
    width: 100%;
    min-height: 300px;
    margin: 30px auto;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
        margin: 10px auto;
        justify-content: space-between;
    }
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
            <Wrapper>
            {filtredProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
            </Wrapper>
        </Container>
    )
}

export default Products
