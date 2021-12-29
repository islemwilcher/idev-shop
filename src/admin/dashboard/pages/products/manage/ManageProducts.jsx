
import { useState } from 'react'
import styled from 'styled-components'

import ProductForm from '../form/ProductForm'
import Products from '../../../../../components/products/Products'

const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin-top: 20px;
    @media (max-width: 768px) {
        
    }
`
const Right = styled.div`
    width: 20%;
    margin: auto !important;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const Left = styled.div`
    width: 100%;
    margin: auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const ManageProducts = () => {

    const [currentId, setCurrentId] = useState(0)
    const [visible, setVisibale] = useState(true)

    return (
        <Container>
            <Left>
                <Products setCurrentId={setCurrentId} visible={visible} />
            </Left>
            <Right>
                <ProductForm currentId={currentId} setCurrentId={setCurrentId} />
            </Right>
        </Container>
    )
}

export default ManageProducts
