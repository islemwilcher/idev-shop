
import { IoMdCart } from 'react-icons/io'
import { useLocation } from 'react-router-dom'

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"


import { getProduct } from "../actions/products"

import styled from 'styled-components'

const Container = styled.div``

const Wrapper = styled.h1`
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Img = styled.img`
    flex: 1;
    background-size: contain;
    height: 500px;
    width: 400px;
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
    background-color: green;
    color: white;
    padding: 10px 14px;
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

const Content = styled.div`
    flex: 1;
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

    

    return (
        <Container>
                <Wrapper>
                    <Img src={product.img} alt={product.name} />
                    <Content>
                        <Title>{product.name}</Title>
                        <Price>${product.Price}</Price>
                        <Desc>{product.description}</Desc>
                        <Button>Add to Cart <IoMdCart size='25px' /></Button>
                    </Content>
                </Wrapper>
        </Container>
    )
}

export default Product
