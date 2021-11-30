
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { neWProducts } from '../../actions/products'

//components
import Product from '../Product'

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

const NewProducts = () => {

    //new products limit 4
    const {newProducts} = useSelector((state) => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(neWProducts())
    },[dispatch])

    

    return (
        <Container>
            <Wrapper>
            {newProducts.map(item => (
                <Product item={item} key={item._id} />
            ))}
            </Wrapper>
        </Container>
    )
}

export default NewProducts
