
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
    margin-left: 10px;
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

const Rightnav = ({ open, setOpen }) => {

    const cart = useSelector((state) => state.cart)
    console.log(cart.quantity)

    var wWidth = window.innerWidth

    const Style = { textDecoration: 'none' }

    return (
            <Right open = {open} >
                { wWidth > '768' ? <Search /> : null }
                <Link style={Style} to='/cart'>
                    <Button bg='transparent'>
                        <Badge badgeContent={cart.quantity} color='primary'>
                            <IoMdCart size='25px' />
                        </Badge>
                    </Button>
                </Link>
            </Right>
    )
}

export default Rightnav
