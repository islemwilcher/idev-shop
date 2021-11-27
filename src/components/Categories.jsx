
import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Category from './Category'
import Product from './Product'

const Container = styled.div`
    width: 80%;
    min-height: 280px;
    margin: 60px auto 30px auto;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 90%;
    }
`

const Products = ({ cat, filters }) => {

    const [catego, setCatego] = useState([])

    useEffect(() => {
        //get categories products from api
        const getCatego = async () => {
            try {
                const res = await axios.get("http://localhost:8001/api/categories")
                setCatego(res.data)
            } catch (error) {
                
            }
        }
        getCatego()
    }, [catego])

    return (
        <Container>
            {catego.map((item) => (
                <Category item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
