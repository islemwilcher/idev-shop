
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"


import IMG from '../assets/shirts.jpg'
import { Add, Remove } from "@material-ui/icons"

const Container = styled.div``

const Wrraper = styled.div`
    padding: 20px;
    @media (max-width: 768px) {
        padding: 10px;
    }
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === 'filled' && 'none' };
    background-color: ${(props) => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${(props) => props.type === 'filled' && 'white' }
`

const TopTexts = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 400px) {
        flex-direction: column;
    }
`

const Hr = styled.hr`
    margin: 2px ;
    background-color: #eee;
    border: none;
    height: 1px;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
    height: 200px;
`

const DeTails = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ColorContainer = styled.div`
    display: flex;
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color}
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    fonst-size: 24px;
    margin: 5px;
    @media (max-width: 768px) {
        margin: 5px 15px;
    }
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    min-height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-constent: space-between;
    font-weight: ${(props) => props.type === 'total' && '500' };
    font-size: ${(props) => props.type === 'total' && '24px' };
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`


const Cart = () => {

    const cart = useSelector((state) => state.cart)
    console.log(cart)
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (type) => {
        if (type === 'dec') {
            quantity > 1 && setQuantity(quantity - 1) 
            cart.quantity = quantity
        } else {
            setQuantity(quantity + 1)
            cart.quantity = quantity
        }
    }

    return (
        <Container>
            <Wrraper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shipping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled' >CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => (
                        <Product>
                            <ProductDetail>
                                <Image src={product.img} />
                                <DeTails>
                                    <ProductName>
                                        <b>Product:</b> {product.name}
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> {product._id}
                                    </ProductId>
                                    <ColorContainer>
                                        <b>Color: </b> 
                                        <ProductColor color={product.color} />
                                    </ColorContainer>
                                    <ProductSize>
                                        <b>Size:</b> {product.size}
                                    </ProductSize>
                                </DeTails>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove onClick={() => handleQuantity('dec')} />
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Add onClick={() => handleQuantity('inc')} />
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        ))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal: </SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimation Shipping: </SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount: </SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>Total: </SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrraper>
        </Container>
    )
}

export default Cart
