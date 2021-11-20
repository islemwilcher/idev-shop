

import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const SearchContainer = styled.div`
border: 1px solid lightgray;
border-radius: 10px;
width: 90%;
display: flex;
margin: 0px auto;
align-items: center;
justify-content: center;
padding: 10px;
align-items:center;
`
const Input = styled.input`
border: none;
width: 100%;
padding: 8px 20px;
margin_right: 5px;
`

const Search = () => {
    return (
        <SearchContainer>
            <Input />
            <FiSearch size='25px' />
        </SearchContainer>
    )
}

export default Search
