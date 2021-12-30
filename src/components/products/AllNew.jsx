
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import styled from 'styled-components'

import { allNEWProducts } from "../../actions/products"

//components
import Product from './Product'
import Loading from '../Loading'

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

const AllNew = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allNEWProducts())
    },[dispatch])

    //all new products
    const {allNewProducts} = useSelector((state) =>  state.products)

    const type = 'bars'
    const color = 'lightblue'

    return (
        <Container>
            
        {!allNewProducts?.length 
        ? (
            <Loading type={type} color={color} />
        )
        : (
            <>
            <Title>New Products</Title>
            <Wrapper>
                {allNewProducts.map(item => (
                    <Product item={item} key={item._id} />
                ))}
            </Wrapper>
            </>
        )}
        </Container>
    )
}

export default AllNew
