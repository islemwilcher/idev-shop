
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styled from "styled-components"

import { signin } from '../../actions/auth'

const Container = styled.div`
    width: 100%;
    height: 87vh;
    display: flex;
    align-items: center;
`

const Wrapper = styled.div`
    background-color: rgb(180, 180, 180);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: auto;
    width: 40%;
    text-align: center;
`

const Form = styled.form`
    width:100%;
    margin-top: 20px;
`

const Title = styled.h1`
    margin-top: 30px;
`
const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 18px;
    padding: 10px;
`

const Button = styled.button`
    border: none;
    border-radius: 5px;
    margin: 10px 0px;
    font-size: 18px;
    padding: 10px;
    color: white;
    background-color: rgb(35, 35, 207);
    cursor: pointer;
    &:hover{
        background-color: rgb(43, 43, 250);
        box-shadow: 2px 2px 12px black;
    }
`

const Note = styled.h3`
    color: black;
    font-weight: 300;
    font-size: 18px;
`

const Signin = () => {

    const [form, setForm] = useState({ userName: '', password: ''})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signin(form, navigate))
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <Form onSubmit={handleSubmit} >
                    <FormWrapper>
                        <Input name="userName" label='User Name' type="text" placeholder="UserName" onChange={handleChange} />
                        <Input name="password" label='Password' type="password" placeholder="Password" onChange={handleChange} />
                        <Button>SIGN IN</Button>
                    </FormWrapper>
                    <Note>
                        this is a private shop only admin allowed to sign in!
                    </Note>
                </Form>
            </Wrapper>
            
        </Container>
    )
}

export default Signin
