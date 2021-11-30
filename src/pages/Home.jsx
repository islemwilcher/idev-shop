
import styled from 'styled-components'

//components
import Header from '../components/Header'
import TopCategories from '../components/TopCategories'
import Best from '../components/Best'
import New from '../components/New'
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
