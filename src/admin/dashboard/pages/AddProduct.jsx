
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getProducts } from '../../../actions/products'

//components
import FormP from '../components/FormP'
import Products from '../../../components/products/AllNew'

const Container = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`
const Left = styled.div`
    width: 74%
    @media (max-width: 768px) {
        width: 100%;
    }
`
const Right = styled.div`
    width: 24%;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const AddProduct = () => {

    return (
        <Container>
                <Left>
                    <Products />
                </Left>
                <Right>
                    <FormP />
                </Right>
        </Container>
    )
}

export default AddProduct
