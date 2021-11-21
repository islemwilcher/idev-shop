

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
const Button = styled.button`
    padding: 2px 10px;
    font-size: 14px;
    font-weight: 500;
    background-color: ${props=>props.bg};
    cursor: pointer;
    border: none;
    color: black;
    &:hover {
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    font-weight: 700;
}
`

const Search = () => {
    return (
        <SearchContainer>
            <Input />
            <Button bg='transparent'>
                <FiSearch size='25px' />
            </Button>
        </SearchContainer>
    )
}

export default Search
