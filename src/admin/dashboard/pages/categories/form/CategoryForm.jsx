
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'
import styled from 'styled-components'

//import { } from '../../../../../actions/categories'

import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div``

const Form = styled.form``

const Title = styled.h2``
const Input = styled.input``

const CategoryForm = ({ currentId, setCurrentId }) => {

    const [catData, setCatData] = useState({
        name: '',
        selectedFile: ''
    })

    useEffect(() => {

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    const clear = () => {
        setCurrentId(0)

        setCatData({
            name: '',
            selectedFile: ''
        })
    }

    return (
        <Wrapper>
            <Form autocomplete='off' onSubmit={handleSubmit}>
                <Title>Create Category</Title>
                <Input name='name' label='name' value={catData.name} onChange={(e) => setCatData({ ...catData, name: e.target.value })} />
                <div>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setCatData({ ...catData, selectedFile: base64 })} />
                </div>
                <Button type='submit'>Submit</Button>
                <Button color='secondary' onClick={clear}>Clear</Button>
            </Form>
        </Wrapper>
    )
}

export default CategoryForm
