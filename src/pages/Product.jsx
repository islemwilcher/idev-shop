
import { IoMdCart } from 'react-icons/io'
import { useLocation } from 'react-router-dom'

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"


import { getProduct } from "../actions/products"

import styled from 'styled-components'

const Container = styled.div``

const Wrapper = styled.h1`
    width: 90%;
    height: 80vh;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const ImgContainer = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 80% ;
`
const Img = styled.img`
    background-size: contain;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    transform: scale(1);
    transition: 0.3s ease-in-out;
    @media (max-width: 768px) {
        width: 100%;
        height: 350px;
    }
`

const Title = styled.h1`
    color: black;
    font-size: 28px;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 26px;
    }
`
const Price = styled.h2`
    color: gray;
    font-size: 26px;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`
const Desc = styled.p`
    color: black;
    font-size: 22px;
    font-weight: 200;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    background-color: green;
    color: white;
    padding: 0px 14px;
    margin-top: 20px;
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
        font-size: 18px;
    }
`

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    width: 90%;
`


const Product = () => {

    const location = useLocation()

    const id = location.pathname.split("/")[3]
    console.log(id)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct(id))
    },[id])

    const {product, products} = useSelector((state) => state.products)

    const cartstyle = {
        marginLeft: '10px'
    }

    return (
        <Container>
                <Wrapper>
                    <ImgContainer>
                    <Img src={product.img} alt={product.name} />
                    </ImgContainer>
                    <ContentWrapper>
                    <Content>
                        <Title>{product.name}</Title>
                        <Price>${product.price}</Price>
                        <Desc>{product.description}</Desc>
                        <Button><p>Add to Cart </p><IoMdCart size='25px' style={cartstyle} /></Button>
                    </Content>
                    </ContentWrapper>
                </Wrapper>
        </Container>
    )
}

export default Product
