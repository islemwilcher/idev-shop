
import { Link } from 'react-router-dom'

import styled from 'styled-components'


const Content = styled.div`
    text-align: center;
    margin: auto
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

const Product = ({ item, key }) => {

    const navStyle = {
        textDecoration: 'none'
    }

    return (
            <Content>
                    <Link style={navStyle} to='#'>
                    <Card>
                        <Img  src={item.image} alt="shirts" />
                        <Darken />
                    </Card>
                    <CardTitle>{item.name}</CardTitle>
                    <Price>{item.price}</Price>
                    </Link>
                </Content>
    )
}

export default Product
