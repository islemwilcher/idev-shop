
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

//icons
import { IoMdCart } from 'react-icons/io'
import { useLocation } from 'react-router-dom'

//actions
import { getProduct } from "../actions/products"

//styles
import styled from 'styled-components'

//components
import Loading from '../components/Loading'

//animation
import Fade from 'react-reveal/Fade'

const Container = styled.div``

const Wrapper = styled.h1`
    width: 90%;
    height: 80vh;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
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
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 400px) {
        width: 90%;
    }
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
    font-size: 30px;
    font-weight: 600;

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
    font-weight: 300;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`
const Color = styled.p`
    color: black;
    font-size: 22px;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`
const Size = styled.p`
    color: black;
    font-size: 22px;
    font-weight: 400;

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
    @media (max-width: 768px) {
        width: 100%;
    }
`
const Content = styled.div`
    width: 90%;
`

const Product = () => {

    const {product, isLoading} = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const location = useLocation()

    const id = location.pathname.split("/")[3]
    
    const cartstyle = {
        marginLeft: '10px'
    }

    const type = 'bubbles'
    const color = 'lightblue'

    useEffect(() => {
        dispatch(getProduct(id))
    },[id, dispatch])

    if(!product) return null

    if(isLoading) {
        return(
            <Loading type={type} color={color} />
        )
    }

    return (
        <Container>
                <Wrapper>
                    <ImgContainer>
                        <Fade Bottom>
                            <Img src={product.img} alt={product.name} />
                        </Fade>
                    </ImgContainer>
                    
                    <ContentWrapper>
                    <Content>
                        <Fade Bottom>
                            <Title>{product.name}</Title>
                        </Fade>
                        <Fade Bottom>
                            <Price>${product.price}</Price>
                        </Fade>
                        <Fade Bottom>
                            <Desc>{product.description}</Desc>
                        </Fade>
                        <Fade Bottom>
                            <Color>color: {product.color}</Color>
                        </Fade>
                        <Fade Bottom>
                            <Size>size: {product.size}</Size>
                        </Fade>
                        <Fade Bottom>
                            <Button><p>Add to Cart </p><IoMdCart size='25px' style={cartstyle} /></Button>
                        </Fade>
                    </Content>
                    </ContentWrapper>
                </Wrapper>
        </Container>
    )
}

export default Product
