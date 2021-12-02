
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getProducts } from '../../../actions/products'

//components
import Products from '../../../components/products/Products'
import Form from '../components/Form'

const Contaner = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 8;
`
const Right = styled.div`
    flex: 2;
`

const AddProduct = () => {
    const {products} = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts)
    })

    return (
        <Contaner>
            <Left>
                <Products />
            </Left>
            <Right>
                <Form />
            </Right>
        </Contaner>
    )
}

export default AddProduct
