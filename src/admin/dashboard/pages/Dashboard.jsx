
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 80%;
    margin: auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Title = styled.h1`
    margin-left: 30px;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const Paper = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 120px;
    text-align: center;
    box-shadow: 2px 2px 12px black;
    border-radius: 10px;
    margin-bottom: 30px;
`

const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: blue;
    color: white;
    padding: 10px 12px;
    margin: auto auto 20px auto;
    width: 50%;
    font-size: 18px;
    cursor: pointer;
`

const Dashboard = () => {

    const Style = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
        <Container>
            <Title>DASHBOSRD</Title>
            <Wrapper>
                <Paper>
                    Products
                    <Button><Link style={Style} to='manageproducts'>Manage</Link></Button>
                </Paper>
                <Paper>
                    Categories
                    <Button><Link style={Style} to='managecategories'>Manage</Link></Button>
                </Paper>
                <Paper>
                    Orders
                    <Button><Link style={Style} to='manageorders'>Manage</Link></Button>
                </Paper>
            </Wrapper>
        </Container>
    )
}

export default Dashboard
