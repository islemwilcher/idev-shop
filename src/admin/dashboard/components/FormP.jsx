
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import FileBase from 'react-file-base64'

import { addProduct, updateProduct } from '../../../actions/products'

import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    margin-top: 60px;
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
    width: 100%;
    text-align: center;
    @media (max-width: 768px) {
        width: 90%;
    }
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

const File = styled.div``

const FormP = () => {

    const [productData, serProductData] = useState({
        name: '',
        discription: '',
        categories: '',
        color: '',
        size: '',
        price: '',
        selectedFile: ''
    })

    

    return (
        <Container>
        <Wrapper>
            <Title>Add Product</Title>
            <Form >
                <FormWrapper>
                    <Input name="name" label='Name' type="text" placeholder="Name"  />
                    <Input name="description" label='description' type="text" placeholder="description"  />
                    <Input name="categories" label='categories' type="text" placeholder="categories"  />
                    <Input name="color" label='color' type="text" placeholder="colors"  />
                    <Input name="size" label='size' type="text" placeholder="sizes"  />
                    <Input name="price" label='price' type="text" placeholder="price"  />
                    <File><FileBase type="file" multiple={false} /></File>
                    <Button>Add</Button>
                </FormWrapper>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default FormP
