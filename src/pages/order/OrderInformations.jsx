
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
    width: 80%;
    margin: 10px auto;

    @media (max-width: 768px) {
        margin: 10px auto;
    }
`

const Path = styled.div`
    width: 80%;
    margin: 10px auto;
    display: flex;
    height: 60px;
    align-items: center;

    p {
        font-size: 14px;
    }

    @media (max-width: 768px) {
        margin: 10px auto ;
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
    border-radius: 10px;
    box-shadow: 1px 1px 6px gray;

    h3 {
        font-weight: 500;
    }

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
const Hr = styled.hr`
    width: 80%;
    margin: 20px auto;
`

const ContavtInformation = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 80%;
    height: 100px;

    h4 {
        margin: 0px !important;
        font-weight: 500;
    }
`
const InformationEmail = styled.div`
    display: flex;
`

const Input = styled.input`
    padding: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    width: 98%;
    padding: 10px;
`

const Label = styled.label`
    font-weight: 300;
    margin-left: 10px;
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
                    <h3>Express checkout</h3>
                    <PypalButton>
                    <img src={PAYPAL} alt="logo" width="60px" height="20px" />
                    </PypalButton>
                </ExpressCheckout>
                <Hr />
                <ContavtInformation>
                    <h4>Contact information</h4>
                    <Input name='email' placeholder='Email' />
                    <InformationEmail>
                        <input name='emailMe' type='checkbox' />
                        <Label for='emailMe'>Email me with news and offers</Label>
                    </InformationEmail>
                </ContavtInformation>

            </Left>
            <Right></Right>
        </Container>
        </>
    )
}

export default OrderInformations
