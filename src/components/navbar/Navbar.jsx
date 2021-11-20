import React from 'react'
import LOGO from '../../assets/logo.png';
import styled from 'styled-components';
import Burger from './Burger'

import RightNav from './RightNav'

const Nav = styled.nav`
    max-width: 100%;
    margin: 0px auto;
    border-bottom: 1px solid gray;
    box-shadow: 2px 2px 10px black;
    padding: 0px 0px 0px 30px;
    align-items: center;
    text-align:center;
    display: flex;
    justify-content: space-between;
    height:12vh;
`
const Logo = styled.div`
    flex: 1;
    width: 60px;
    margin: 0px;
`
const Burg = styled.div`
    flex: 1;
`

const navbar = () => {
    return (
        <Nav>
            <Burg>
                <Burger />
            </Burg>
            
            <Logo>
                <img src={LOGO} alt="logo" width="60px" height="60px" />
            </Logo>
            <RightNav />
        </Nav>
    )
}

export default navbar