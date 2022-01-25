
import { Link } from 'react-router-dom'

//components
import LOGO from '../../assets/logo.png'
import PAYPAL from '../../assets/paypal.png'
import  { MdKeyboardArrowRight }  from 'react-icons/md'

//for styles
import styled from 'styled-components'

const Container = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const Left = styled.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Logo = styled.div`
    width: 60px;
    margin: 10px auto 10px 60px;
`

const Path = styled.div`
    display: flex;
    width: 300px;
    height: 60px;
    align-items: center;
    margin-left: 60px;

    p {
        font-size: 14px;
    }
`
const ExpressCheckout = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 80%;
    height: 100px;
    padding: 0 0 30px 0;
    background-color: whitesmoke;

`

const PypalButton = styled.button`
    width: 80%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #ffe51c;
    cursor: pointer;
    box-shadow: 1px 1px 12px gray;

    :hover {
        background-color: #edc71c;
        box-shadow: 1px 1px 6px gray;
    }

`

const Right = styled.div`
    width: 50%;
    height: 100vh;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const OrderInformations = () => {

    const Styles = {
        color: 'rgb(136, 165, 219)',
        textDecoration: 'none'
    }

    return (
        <>
        <Container>
            <Left>
                <Logo>
                    <Link to='/'>
                        <img src={LOGO} alt="logo" width="60px" height="60px" />
                    </Link>
                </Logo>
                <Path>
                    <Link style={Styles} to='/cart'>
                        <p>Cart</p>
                    </Link>
                    <MdKeyboardArrowRight size='24px' color='rgb(136, 165, 219)' />
                    <p>Information</p>
                    <MdKeyboardArrowRight size='24px' color='rgba(0, 0, 0, 0.2)' />
                    <p>Shipping</p>
                    <MdKeyboardArrowRight size='24px' color='rgba(0, 0, 0, 0.2)' />
                    <p>Payment</p> 
                </Path>
                <ExpressCheckout>
                    <h6>Express checkout</h6>
                    <PypalButton>
                    <img src={PAYPAL} alt="logo" width="60px" height="20px" />
                    </PypalButton>
                </ExpressCheckout>

            </Left>
            <Right></Right>
        </Container>
        </>
    )
}

export default OrderInformations
