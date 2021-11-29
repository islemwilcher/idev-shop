
import { useDispatch } from 'react-redux'
import { getProducts } from '../actions/products'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import styled from 'styled-components'

//components
import Products from '../components/Products'
import News from '../components/newsletter/News'

const Container = styled.div`
    width: 100%;
    margin: auto;
`

const Wrapper = styled.div`
    width: 90%;
    margin: auto;
`

const Title = styled.h1`
    color: black;
    font-size: 55px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`

const Layout = styled.div`
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
    }
`
const FilterContainer = styled.div`
    width: 30%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex: 1;
        flex-direction: column;
    }
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
    flex: 1;
    }
`

const FilterTitle = styled.span`
    font-size: 30px;
    font-weight: 300;
    @media (max-width: 768px) {
    margin-left: auto;
    }
`

const FilterPrice = styled.select`
    margin-left: 15px;
    padding: 10px;
    @media (max-width: 768px) {
        margin: 10px 0px 0px 10px;
    }
`
const FilterColor = styled.select`
    margin-left: 15px;
    padding: 10px;
    @media (max-width: 768px) {
        margin: 2px 0px 0px 10px;
    }
`

const FilterPriceOption = styled.option``;
const FilteColorOption = styled.option``;

const Categorie = () => {

    const location = useLocation()

    const cat = location.pathname.split("/")[2]

    const [filters, setFilters] = useState({})

    const handleFilters = (e) => {
        const value = e.target.value

        setFilters({ ...filters, [e.target.name]: value })
        
    }
    console.log(filters)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    return (
        <Container>
            <Wrapper>
                <Layout>
                    <Title>{cat}</Title>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor name="color" onChange={handleFilters} >
                                <FilteColorOption>color</FilteColorOption>
                                <FilteColorOption>black</FilteColorOption>
                                <FilteColorOption>gray</FilteColorOption>
                                <FilteColorOption>lightgray</FilteColorOption>
                                <FilteColorOption>yellow</FilteColorOption>
                                <FilteColorOption>red</FilteColorOption>
                            </FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Price</FilterTitle>
                            <FilterPrice name="price" onChange={handleFilters} >
                            <FilterPriceOption>price</FilterPriceOption>
                            <FilterPriceOption>2000.99</FilterPriceOption>
                            <FilterPriceOption>2800.99</FilterPriceOption>
                            <FilterPriceOption>2200.00</FilterPriceOption>
                            </FilterPrice>
                        </Filter>
                    </FilterContainer>
                </Layout>
            </Wrapper>
            <Products cat={cat} filters={filters} />
            <News />
        </Container>
    )
}

export default Categorie
