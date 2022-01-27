
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

//icons
import { IoMdCart, IoMdAdd, IoIosRemove } from 'react-icons/io'
import { useLocation } from 'react-router-dom'

//actions
import { getProduct } from "../actions/products"
import { addToCart } from '../actions/carts'

//styles
import styled from 'styled-components'

//components
import Navbar from '../components/navbar/Navbar'
import Loading from '../components/Loading'

//animation
import Zoom from 'react-reveal/Zoom'

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

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 60px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Product = () => {

    const {product} = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const location = useLocation()

    //carts
    const [cartProduct, setCartProduct] = useState({})
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (type) => {
        if (type === 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const id = location.pathname.split("/")[3]
    
    const cartstyle = {
        marginLeft: '10px'
    }

    const type = 'bubbles'
    const color = 'lightblue'

    useEffect(() => {
        dispatch(getProduct(id));
        setCartProduct({ ...cartProduct, product });
    },[id, dispatch])

    if(!product) return (
            <Loading type={type} color={color} />
    )

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, quantity));
    }

    return (
        <>
        <Navbar />
        <Container>
            <Zoom>
                <Wrapper>
                    <ImgContainer>
                        <Img src={product.img} alt={product.name} />
                    </ImgContainer>
                    <ContentWrapper>
                    <Content>
                            <Title>{product.name}</Title>
                            <Price>${product.price}</Price>
                            <Desc>{product.description}</Desc>
                            <Color>color: {product.color}</Color>
                            <Size>size: {product.size}</Size>
                            <AmountContainer>
                                <IoIosRemove onClick={() => handleQuantity('dec')} />
                                <Amount>{quantity}</Amount>
                                <IoMdAdd onClick={() => handleQuantity('inc')} />
                            </AmountContainer>
                            <Button onClick={addToCartHandler} ><p>Add to Cart </p><IoMdCart size='25px' style={cartstyle} /></Button>
                    </Content>
                    </ContentWrapper>
                </Wrapper>
                </Zoom>
        </Container>
        </>
    )
}

export default Product
