
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getProducts } from '../../../actions/products'

//components
import FormP from '../components/FormP'

const Container = styled.div`

`

const AddProduct = () => {

    return (
        <Container>
                <FormP />
        </Container>
    )
}

export default AddProduct
