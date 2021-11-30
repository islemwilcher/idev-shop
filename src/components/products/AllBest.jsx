
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import styled from 'styled-components'

import { allBESTProducts } from "../../actions/products"

//components
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

const AllNew = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allBESTProducts())
    },[dispatch])

    //all new products
    const {allBestProducts} = useSelector((state) =>  state.products)

    return (
        <Container>
            <Wrapper>
            {allBestProducts.map(item => (
                <Product item={item} key={item._id} />
            ))}
            </Wrapper>
        </Container>
    )
}

export default AllNew
