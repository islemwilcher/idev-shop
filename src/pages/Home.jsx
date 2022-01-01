
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { getCategories } from '../actions/categories'

//components
import Header from '../components/Header'
import TopCategories from '../components/categories/TopCategories'
import Best from '../components/products/Best'
import New from '../components/products/New'
import News from '../components/newsletter/News'
import Loading from '../components/Loading'

//styles
import './Home.css'

//animation
import Fade from 'react-reveal/Fade'

const Container = styled.div``

const Home = () => {

    const {categories} = useSelector((state) =>  state.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    
    const type='bars'
    const color = 'yellow'

    return (
        <>
        {categories?.length 
        ? (
            <Container>
                <Header />
                <Fade bottom>
                    <TopCategories />
                </Fade>
                <Fade bottom>
                    <Best />
                </Fade>
                <Fade bottom>
                    <New />
                </Fade>
                <Fade bottom>
                    <News />
                </Fade>
            </Container>
        ) 
        : (
            <Loading type={type} color={color} />
        )
        }
        </>
    )
}

export default Home
