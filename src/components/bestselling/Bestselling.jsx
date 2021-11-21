
import { Link } from 'react-router-dom'

import RYBAN from '../../assets/glasses.png'
import LIGHTSHIRT from '../../assets/shirtt.png'
import NIKESHOE from '../../assets/shoes.png'
import HEADPHONE from '../../assets/headphone.png'

import styled from 'styled-components'

const Container = styled.div`
    width: 80%;
    margin: auto;
`

const Layout = styled.div`
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h1`
    color: black;
    font-size: 28px;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`

const Button = styled.button`
    background-color: green;
    color: white;
    padding: 10px 14px;
    border: none;
    border-radius: 5px;
    font-size: 22px;
    cursor: pointer;
    &:hover{
        font-weight: 500;
        box-shadow: 1px 1px 6px black;
        background-color: rgba(0, 208, 0, 0.8, 0.5)
    }
    @media (max-width: 768px) {
        font-size: 20px;
    }
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
        width: 90%;
        justify-content: center;
    }
`

const Content = styled.div`
    text-align: center;
`

const Card = styled.div`
    margin: 30px auto;
    display: flex;
    flexDirection: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    height: 380px;
    width: 240px;
    position: relative;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    &:hover {
        border-radius: 18px;
    }

`

const Darken = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 380px;
    width: 240px;
    background-color: rgba(0, 0, 0, 0.2);
    background-blend-mode: darken;
    z-index: 5;
    border-radius: 15px;
    &:hover{
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 18px;
    }
`

const CardTitle = styled.h3`
    color: black;
    font-weight: 500;
    font-size: 18px;
    margin: 0px;
`

const Price = styled.h6`
    color: black;
    font-weight: 300;
    font-size: 18px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    background-size: contain;
    z-index:0;
    height: 280px;
    border-radius: 15px;
`

const Bestselling = ({ title }) => {
    const navStyle = {
        textDecoration: 'none'
    }
    return (
        <Container>
            <Layout>
                <Title>{title}</Title>
                <Button>View all</Button>
            </Layout>
            <Wrapper>
                <Content>
                    <Link style={navStyle} to='#'>
                    <Card>
                        <Img  src={LIGHTSHIRT} alt="shirts" width="200px" height="380px" />
                        <Darken />
                        
                    </Card>
                    <CardTitle>Light Shirt</CardTitle>
                    <Price>$ 20.00</Price>
                    </Link>
                </Content>
                <Content>
                    <Link style={navStyle} to='#'>
                    <Card>
                        <Img  src={RYBAN} alt="shirts" width="200px" height="380px" />
                        <Darken />
                        
                    </Card>
                    <CardTitle>Ryban</CardTitle>
                    <Price>$ 60.00</Price>
                    </Link>
                </Content>
                <Content>
                    <Link style={navStyle} to='#'>
                    <Card>
                        <Img  src={NIKESHOE} alt="shirts" width="200px" height="380px" />
                        <Darken />
                        
                    </Card>
                    <CardTitle>Nike shoe</CardTitle>
                    <Price>$ 120.00</Price>
                    </Link>
                </Content>
                <Content>
                    <Link style={navStyle} to='#'>
                    <Card>
                        <Img  src={HEADPHONE} alt="shirts" width="200px" height="380px" />
                        <Darken />
                        
                    </Card>
                    <CardTitle>Head phone</CardTitle>
                    <Price>$ 80.00</Price>
                    </Link>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Bestselling
