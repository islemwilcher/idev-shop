

import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Products from '../../components/Profucts'
import News from '../../components/newsletter/News'

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

const FilterSize = styled.select`
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

const FilterSizeOption = styled.option``;

const Categorie = () => {

    const location = useLocation()

    const cat = location.pathname.split("/")[2]

    const [filters, setFilters] = useState({})

    const handleFilters = (e) => {
        const value = e.target.value

        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }

    return (
        <Container>
            <Wrapper>
                <Layout>
                    <Title>Shirts</Title>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor name='color' onChange={handleFilters} >
                                <FilterSizeOption>black</FilterSizeOption>
                                <FilterSizeOption>gray</FilterSizeOption>
                                <FilterSizeOption>lightgray</FilterSizeOption>
                                <FilterSizeOption>darkblue</FilterSizeOption>
                            </FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize name='size' onChange={handleFilters} >
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
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
