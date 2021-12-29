
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'
import styled from 'styled-components'

import { addProduct, updatedProduct } from '../../../../../actions/products'

const Wrapper = styled.div``

const Form = styled.form`
    border-radius: 10px;
    box-shadow: 2px 2px 12px black;
    text-align: center;
    padding: 10px 0px;
    width: 90%;
    margin: auto;
`

const Title = styled.h2`
    margin: 5px;
`

const File = styled.h2`
    margin: 8px;
`

const Input = styled.input`
    padding: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    width: 90%;
    margin-top: 5px;
`

const Actions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    border: none;
    border-radius: 10px;
    color: white;
    width: 90%;
    padding: 5px;
    margin-bottom: 10px;
    background-color: ${(props) => props.bg};
    cursor: pointer;
`

const ProductForm = ({ currentId, setCurrentId }) => {

    const [prodData, setProdData] = useState({
        name: '',
        description: '',
        categories: '',
        color: '',
        size: '',
        price: '',
        img: ''
    })

    const product = useSelector((state) =>(currentId ? state.products.products.find((product) => product._id === currentId) : null))
    const dispatch = useDispatch()

    useEffect(() => {
        if(product) setProdData(product)
    }, [product])

    const clear = () => {
        setCurrentId(0)

        setProdData({
            name: '',
            description: '',
            categories: '',
            color: '',
            size: '',
            price: '',
            img: ''
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(currentId === 0) {
            dispatch(addProduct(prodData))
            clear()
        } else {
            dispatch(updatedProduct(currentId, prodData))
            clear()
        }
    }

    return (
        <Wrapper>
            <Form autocomplete='off' onSubmit={handleSubmit} >
                <Title>Create Product</Title>
                <Input name='name' placeholder='Name' value={prodData.name} onChange={(e) => setProdData({ ...prodData, name: e.target.value })} />
                <Input name='description' value={prodData.description} placeholder='description' onChange={(e) => setProdData({ ...prodData, description: e.target.value })} />
                <Input name='categories' value={prodData.categories} placeholder='categories' onChange={(e) => setProdData({ ...prodData, categories: e.target.value })} />
                <Input name='color' value={prodData.color} placeholder='color' onChange={(e) => setProdData({ ...prodData, color: e.target.value })} />
                <Input name='size' value={prodData.size} placeholder='size' onChange={(e) => setProdData({ ...prodData, size: e.target.value })} />
                <Input name='price' value={prodData.price} placeholder='price' onChange={(e) => setProdData({ ...prodData, price: e.target.value })} />
                <File>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setProdData({ ...prodData, img: base64 })} />
                </File>
                <Actions>
                    <Button type='submit' bg="green">Submit</Button>
                    <Button bg='red' onClick={clear}>Clear</Button>
                </Actions>
            </Form>
        </Wrapper>
    )
}


export default ProductForm
