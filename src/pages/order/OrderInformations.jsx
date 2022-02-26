
import { useState } from 'react'
import { Link } from 'react-router-dom'

//components
import LOGO from '../../assets/logo.png'
import PAYPAL from '../../assets/paypal.png'
import  { MdKeyboardArrowRight, MdKeyboardArrowLeft }  from 'react-icons/md'

//for styles
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background-color: whitesmoke;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const Left = styled.div`
    width: 50%;
    background-color: white;
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
        margin: 10px auto;
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
    border-color: whitesmoke;
    width: 80%;
    margin: 30px auto 20px auto;
`

const ContactInformation = styled.div`
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
    width: 94%;
    margin-top: 10px;
    padding: 10px;
`

const Label = styled.label`
    font-weight: 300;
    margin-left: 10px;
`

const ShippinInformation = styled.div`
    margin: 30px auto;
    width: 80%;
    padding: 10px;
    border-radius: 10px;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    h4 {
        margin: 0px !important;
        color: gray;
        margin-top: 10px !important;
        font-weight: 500;
    }
`
const Btn = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
`

const ShippingButton = styled.button`
    padding: 15px;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    width: 100%;
    margin: 0;
    background-color: ${(props) => props.type === 'filled' ? '#2240e6' : 'transparent'};
    color: ${(props) => props.type === 'filled' && 'white' }
`
const ReturnButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    padding: 5px;
    border: none;
    font-weight: 500;
    cursor: pointer;
    width: 100%;
    margin: auto;
    background-color: ${(props) => props.type === 'filled' ? '#2240e6' : 'transparent'};
    color: rgb(136, 165, 219);
`

const Right = styled.div`
    width: 50%;
    height: 100vh;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const OrderInformations = () => {

    const [orderInformations, setOrderInformations] = useState({
        firstName: '',
        lastName: '',
        address: '',
        country: '',
        city: '',
        zipCode: '',
        phone: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(orderInformations);
    }


    const Styles = {
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
                <ContactInformation>
                    <h4>Contact information</h4>
                    <Input name='email' placeholder='Email' />
                    <InformationEmail>
                        <input name='emailMe' type='checkbox' />
                        <Label for='emailMe'>Email me with news and offers</Label>
                    </InformationEmail>
                </ContactInformation>

                <ShippinInformation>
                    <h4>Shipping Address - ENGLISH (Latin characters) required for shipping!</h4>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <Input name='firstName' placeholder='First name' value={orderInformations.firstName} onChange={(e) => setOrderInformations({ ...orderInformations, firstName: e.target.value})} />
                        <Input name='lastName' placeholder='Last name' value={orderInformations.lastName} onChange={(e) => setOrderInformations({ ...orderInformations, lastName: e.target.value})} />
                        <Input name='address' placeholder='Address' value={orderInformations.address} onChange={(e) => setOrderInformations({ ...orderInformations, address: e.target.value})} />
                        <Input name='country' placeholder='Country' value={orderInformations.country} onChange={(e) => setOrderInformations({ ...orderInformations, country: e.target.value})} />
                        <Input name='city' placeholder='City' value={orderInformations.city} onChange={(e) => setOrderInformations({ ...orderInformations, city: e.target.value})} />
                        <Input name='zipCode' placeholder='ZIP code' value={orderInformations.zipCode} onChange={(e) => setOrderInformations({ ...orderInformations, zipCode: e.target.value})} />
                        <Input name='phone' placeholder='Phone' value={orderInformations.phone} onChange={(e) => setOrderInformations({ ...orderInformations, phone: e.target.value})} />
                        <Btn>
                            <ShippingButton type='filled' >CHECKOUT NOW</ShippingButton>
                        </Btn>
                    </form>
                    <Link style={Styles} to='/cart'>
                        <ReturnButton >
                            <MdKeyboardArrowLeft size='18' /> <p>Return to cart</p>
                        </ReturnButton>
                    </Link>
                </ShippinInformation>

            </Left>
            <Right></Right>
        </Container>
        </>
    )
}

export default OrderInformations
