
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import FileBase from 'react-file-base64'

import { addProduct, updateProduct } from '../../../actions/products'

import styled from 'styled-components'

const Container = styled.div`
    width: 400px;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Form = styled.form`
    width: 90%;
    display: felx;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h6`
    color: black;
    font-size: 18px'
    margin: 20px 0px;

`

const Input = styled.input`
    border: none;
    border-radius: 5px;
    font-size: 18px;
    padding: 10px;
`

const TextField = styled.textarea`
    border: none;
    border-radius: 5px;
    resize: none;
    height: 100px;
    font-size: 18px;
    padding: 10px;
`

const File = styled.div``

const FormP = ({ currentId, setCurrentId }) => {

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
                <Form>
                    <Title>Add Product'</Title>
                    <Input placeholder="product name"></Input>
                    <TextField placeholder="product description"></TextField>
                    <Input placeholder="categories"></Input>
                    <Input placeholder='colors'></Input>
                    <Input placeholder='sizes'></Input>
                    <Input placeholder='price'></Input>
                    <File>
                        <FileBase type='file' multiple={false} ></FileBase>
                    </File>
                </Form>
        </Container>
    )
}

export default FormP
