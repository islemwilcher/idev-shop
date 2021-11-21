
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Search from './Search'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    margin-left: 0px;
    background-color: white;
    
    li {
        padding: 0 20px;
        font-size: 20px;
        font-weight: 400;
        color : black;
    }
    li:hover{
        color: rgb(136, 165, 219);
    }
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        z-index: 19;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        top:0;
        right:0;
        height:100vh;
        width:100%;
        padding-top: 2.5rem;
        color:black;
        justify-content: space-evenly;     
        transition: 0.4s ease-in-out;
        li:hover{
            margin: 0 90px 5px 90px;
            color: rgb(136, 165, 219);
        }
        
    }
`

    
const LeftNav = ({ open, setOpen }) => {

    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    }

    let wWidth = window.innerWidth
    
    return (
        <Ul open = {open}>
            { wWidth <= '768' ? <Search /> : null }
            
            <Link style={navStyle} to="/" onClick = {() => setOpen(!open)}><li>Home</li></Link>
            <Link style={navStyle} to="/shirts" onClick = {() => setOpen(!open)}><li>Shirts</li></Link>
            <Link style={navStyle} to="/hats" onClick = {() => setOpen(!open)}><li>Hats</li></Link>
            <Link style={navStyle} to="/glasses" onClick = {() => setOpen(!open)}><li>Glasses</li></Link>
        </Ul>
    )
}

export default LeftNav