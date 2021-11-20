
import styled from 'styled-components';
import Search from './Search'
import { IoMdCart } from 'react-icons/io'

import Badge from '@material-ui/core/badge'

const Right = styled.div`
    flex: 1;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        right: 0;
    }
`

const Button = styled.button`
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    background-color: ${props=>props.bg};
    cursor: pointer;
    border: none;
    color: black;
    &:hover {
    border-radius: 5px;
    box-shadow: 1px 1px 3px black;
    font-weight: 700;
}
`

const Rightnav = ({ open, setOpen }) => {
    var wWidth = window.innerWidth
    return (
            <Right open = {open} >
                { wWidth > '768' ? <Search /> : null }
                <Button bg='transparent'>
                    <Badge badgeContent={1} color='primary'>
                        <IoMdCart size='25px' />
                    </Badge>
                </Button>
            </Right>
    )
}

export default Rightnav
