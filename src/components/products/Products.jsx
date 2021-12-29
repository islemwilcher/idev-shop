
import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import styled from 'styled-components'

import { getProducts } from '../../actions/products'

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
    }
`

const Products = ({ cat, filters, setCurrentId, visible }) => {

    const {products} = useSelector((state) =>  state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    const [categoryProducts, setCategoryProducts] = useState([])
    const [filtredProducts, setFiltredProducts] = useState([])

    // useEffect(() => {
    //     setCategoryProducts(
    //         products.filter(item => item.categories.includes(cat)))
    // },[cat])

    // useEffect(() => {
    //     cat && setFiltredProducts(
    //         categoryProducts.filter(item =>
    //             Object.entries(filters).every(([key, value]) =>
    //             item[key].includes(value)
    //             )
    //         )
    //     )
        
    // }, [filters, cat, categoryProducts])

    const type = 'bars'
    const color = 'lightblue'

    return (
        !products?.length 
        ? (
            <div>
            <Loading type={type} color={color} />
            </div>
        )
        : (
        <Container>
            <Wrapper>
            {products.map((item) => (
                <Product item={item} key={item._id} visible={visible} setCurrentId={setCurrentId} />
            ))}
            </Wrapper>
        </Container>)
    )
}

export default Products
