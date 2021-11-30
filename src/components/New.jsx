
import styled from 'styled-components'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { newProducts } from '../actions/products'

import NewProducts from '../components/newproducts/NewProducts'

const Wrapper = styled.div`
width: 90%;
margin: auto;
`

const Button = styled.button`
background-color: green;
color: white;
padding: 10px 14px;
margin-top: 20px;
border: none;
border-radius: 5px;
font-size: 22px;
cursor: pointer;
&:hover{
    font-weight: 500;
    box-shadow: 1px 1px 6px black;
    background-color: rgba(0, 208, 0, 0.8, 0.5)
}
@media (max-width: 768px) {
    font-size: 18px;
}
`
const Layout = styled.div`
margin: 30px auto;
display: flex;
align-items: center;
justify-content: space-between;
`

const Title2 = styled.h1`
color: black;
font-size: 28px;
font-weight: 500;

@media (max-width: 768px) {
    font-size: 28px;
}
`

const New = () => {

    const navStyle = {
        textDecoration: 'none'
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(newProducts())
    },[dispatch])

    return (
        <>
            <Wrapper>
                <Layout>
                    <Title2>New Products</Title2>
                    <Link style={navStyle} to='/products/new/all' >
                        <Button>View all</Button>
                    </Link>
                </Layout>
            </Wrapper>
            <NewProducts />
        </>
    )
}

export default New
