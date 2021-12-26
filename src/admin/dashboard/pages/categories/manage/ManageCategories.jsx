
import styled from 'styled-components'

import CategoryForm from '../form/CategoryForm'
import Products from '../../../../../components/products/Products'

const Container = styled.div`
    display: flex;
    margin-top: 20px;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
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
    width: 79%;
    margin: auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const ManageCategories = () => {
    return (
        <Container>
            <Left>
                <Products />
            </Left>
            <Right>
                <CategoryForm />
            </Right>
        </Container>
    )
}

export default ManageCategories
