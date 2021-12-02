
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

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

const Products = ({ cat, filters }) => {

    const {products} = useSelector((state) =>  state.products)

    const [categoryProducts, setCategoryProducts] = useState([])
    const [filtredProducts, setFiltredProducts] = useState([])

    useEffect(() => {
        setCategoryProducts(
            products.filter(item => item.categories.includes(cat)))
    },[cat])

    useEffect(() => {
        cat && setFiltredProducts(
            categoryProducts.filter(item =>
                Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
                )
            )
        )
        
    }, [filters, cat, categoryProducts])

    const type = 'bars'
    const color = 'black'

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
            {filtredProducts.map((item) => (
                <Product item={item} key={item._id} />
            ))}
            </Wrapper>
        </Container>)
    )
}

export default Products