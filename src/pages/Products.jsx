
//hooks
import { useSelector } from "react-redux"

//for styles
import styled from 'styled-components'

//components
import Navbar from '../components/navbar/Navbar'
import Product from '../components/products/Product'

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

const Title = styled.h1`
    color: black;
    font-size: 55px;
    font-weight: 500;
    margin-top: 90px;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`

const Products = () => {

    const { products } = useSelector((state) => state.products)
    
    return (
        <>
        <Navbar />
        <Container>
            <Title>Products</Title>
            <Wrapper>
                {products
                .map(item => (
                    <Product item={item} key={item._id} />
                )
                )
                }
            </Wrapper>
        </Container>
        </>
    )
}

export default Products
