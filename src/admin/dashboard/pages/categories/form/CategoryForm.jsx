
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'
import styled from 'styled-components'

import { addCategory, updatedCategory } from '../../../../../actions/categories'


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
    border-radius: 10px;
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
`

const CategoryForm = ({ currentId, setCurrentId }) => {
    const [catData, setCatData] = useState({
        name: '',
        img: ''
    })


    const category = useSelector((state) => (currentId ? state.categories.categories.find((category) => category._id === currentId) : null))
    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem('idevProfile'))

    useEffect(() => {
        if(category) setCatData(category)
    }, [category])

    const clear = () => {
        setCurrentId(0)

        setCatData({
            name: '',
            img: ''
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(currentId === 0 ) {
            dispatch(addCategory(catData))
            clear()
        } else {
            dispatch(updatedCategory(currentId, catData));
            clear()
        }
    }

    return (
        <Wrapper>
            <Form autocomplete='off' onSubmit={handleSubmit}>
                <Title>Create Category</Title>
                <Input name='name' placeholder='Enter Category name...' value={catData.name} onChange={(e) => setCatData({ ...catData, name: e.target.value })} />
                <File>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setCatData({ ...catData, img: base64 })} />
                </File>
                <Actions>
                <Button type='submit' bg="green">Submit</Button>
                <Button bg='red' onClick={clear}>Clear</Button>
                </Actions>
            </Form>
        </Wrapper>
    )
}

export default CategoryForm
