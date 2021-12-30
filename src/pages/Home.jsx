
import styled from 'styled-components'

//components
import Header from '../components/Header'
import TopCategories from '../components/categories/TopCategories'
import Best from '../components/products/Best'
import New from '../components/products/New'
import News from '../components/newsletter/News'

//styles
import './Home.css'

const Container = styled.div``

const Home = () => {

    return (
        <Container>
            <Header />
            <TopCategories />
            <Best />
            <New />
            <News />
        </Container>
    )
}

export default Home
