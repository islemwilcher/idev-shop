
import { Link } from 'react-router-dom'

import RYBAN from '../../assets/glasses.png'
import LIGHTSHIRT from '../../assets/shirtt.png'
import NIKESHOE from '../../assets/shoes.png'
import HEADPHONE from '../../assets/headphone.png'

import styled from 'styled-components'

const Container = styled.div`
    width: 90%;
    margin: auto;
`

const Wrapper = styled.div`
    width: 100%;
    min-height: 300px;
    margin: 30px auto;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-around;

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
    height: 280px;
    width: 280px;
    position: relative;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    overflow: hidden !important;

    &:hover {
        box-shadow: 2px 2px 12px #94928e;

        Img {
                transform: scale(1.1);
        }
    }

`

const Darken = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 280px;
    width: 280px;
    background-color: rgba(0, 0, 0, 0.2);
    background-blend-mode: darken;
    z-index: 5;
    border-radius: 15px;
    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
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
    height: 200px;
    width: 200px;
    border-radius: 15px;
    transform: scale(1);
    transition: 0.3s ease-in-out;
`

const NewProducts = () => {
    const navStyle = {
        textDecoration: 'none'
    }
    return (
        <Container>
            <Wrapper>
                <Content>
                    <Link style={navStyle} to='#'>
                    <Card>
                        <Img  src={LIGHTSHIRT} alt="shirts" />
                        <Darken />
                    </Card>
                    <CardTitle>Light Shirt</CardTitle>
                    <Price>$ 20.00</Price>
                    </Link>
                </Content>
                <Content>
                    <Link style={navStyle} to='#'>
                    <Card>
                        <Img  src={RYBAN} alt="shirts" />
                        <Darken />
                    </Card>
                    <CardTitle>Ryban</CardTitle>
                    <Price>$ 60.00</Price>
                    </Link>
                </Content>
                <Content>
                    <Link style={navStyle} to='#'>
                    <Card>
                        <Img  src={NIKESHOE} alt="shirts" />
                        <Darken />
                    </Card>
                    <CardTitle>Nike shoe</CardTitle>
                    <Price>$ 120.00</Price>
                    </Link>
                </Content>
                <Content>
                    <Link style={navStyle} to='#'>
                    <Card>
                        <Img  src={HEADPHONE} alt="shirts" />
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

export default NewProducts
