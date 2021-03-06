
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { getProducts } from '../actions/products'

import styled from 'styled-components'

//components
import Navbar from '../components/navbar/Navbar'
import FiltredProducts from '../components/products/FiltredProducts'
import News from '../components/newsletter/News'

//animation
import Fade from 'react-reveal/Fade'

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

const FilterColor = styled.select`
    margin-left: 15px;
    padding: 10px;
    @media (max-width: 768px) {
        margin: 2px 0px 0px 10px;
    }
`

const FilteColorOption = styled.option``;

const Categorie = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const [filters, setFilters] = useState({})

    const cat = location.pathname.split("/")[2]

    const handleFilters = (e) => {
        const value = e.target.value

        setFilters({ ...filters, [e.target.name]: value })      
    }

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    return (
        <>
        <Navbar />
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
                    </FilterContainer>
                </Layout>
            </Wrapper>
            <Fade Bottom>
                <FiltredProducts cat={cat} filters={filters} />
            </Fade>
            <Fade Bottom>
                <News />
            </Fade>
        </Container>
        </>
    )
}

export default Categorie
