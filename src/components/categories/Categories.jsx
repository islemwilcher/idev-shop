
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCategories } from '../../actions/categories'

import styled from 'styled-components'

//components
import Category from './Category'
import Loading from '../Loading'

const Container = styled.div`
    width: 80%;
    min-height: 280px;
    margin: 60px auto 30px auto;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 768px) {
        width: 98%;
        justify-content: space-around;
    }
`

const Categories = ({ setCurrentId, visible }) => {

    const {categories} = useSelector((state) =>  state.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    },[dispatch])

    const type = 'bars'
    const color = 'whitesmoke'

    return (
        !categories?.length 
        ? (
            <div>
            <Loading type={type} color={color} />
            </div>
        )
        : (
        <Container>
            {categories.map((category) => (
                <Category item={category} key={category._id} setCurrentId={setCurrentId} visible={visible} />
            ))}
        </Container>)
    )
}

export default Categories
