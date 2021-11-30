
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { getProducts } from '../actions/products'

import Categories from './Categories'

const TopCategories = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    return (
        <>
            <Categories />
        </>
    )
}

export default TopCategories
