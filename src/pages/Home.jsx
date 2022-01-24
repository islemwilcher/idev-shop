
//hooks
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//actions
import { getCategories } from '../actions/categories'

//components
import Navbar from '../components/navbar/Navbar'
import Header from '../components/Header'
import TopCategories from '../components/categories/TopCategories'
import Best from '../components/products/Best'
import New from '../components/products/New'
import News from '../components/newsletter/News'
import Loading from '../components/Loading'

//styles
import styled from 'styled-components'
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
    
    const type='bubbles'
    const color = 'lightblue'

    return (
        <>
        {categories?.length 
        ? (
            <Container>
                <Navbar />
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
