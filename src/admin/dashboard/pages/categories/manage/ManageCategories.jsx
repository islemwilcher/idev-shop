
import { useState } from 'react'
import styled from 'styled-components'

import CategoryForm from '../form/CategoryForm'
import Categories from '../../../../../components/categories/Categories'

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

const ManageCategories = () => {

    const [currentId, setCurrentId] = useState(0)
    const visible = true
    
    return (
        <Container>
            <Left>
                <Categories setCurrentId={setCurrentId} visible={visible} />
            </Left>
            <Right>
                <CategoryForm currentId={currentId} setCurrentId={setCurrentId} />
            </Right>
        </Container>
    )
}

export default ManageCategories
