
import axios from 'axios'
import { useEffect, useState } from 'react'
import Product from '../Product'

import styled from 'styled-components'

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

const Bestselling = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        //get best selling products from api
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8001/api/products/top"
                )
                setProducts(res.data)
            } catch (error) {
                
            }
        }
        getProducts()
    }, [products])

    return (
        <Container>
            <Wrapper>
            {products.map((item) => (
                <Product item={item} key={item.id} />
            ))}
            </Wrapper>
        </Container>
    )
}

export default Bestselling
