
import { useState } from 'react'
import styled from 'styled-components';
import LeftNav from './LeftNav'

const BurgerStyle = styled.div`
    width: 2rem;
    height: 2rem;
    top: 20px;
    left: 40px;    
    z-index: 21;
    display: none;
    position: ${({ open }) => open ? 'fixed' : ''};
    @media (max-width:768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width:2rem;
        height:0.25rem;
        background-color: ${({ open }) => open ? 'rgb(119, 149, 206)' : 'black'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.6s linear;
         &:nth-child(1) {
             transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'}
         }
         &:nth-child(2) {
             opacity: ${({ open }) => open ? '0' : '1'}
         }
         &:nth-child(3) {
             transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}
         }
    }
`;

const Burger = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <BurgerStyle open = {open} onClick = {() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </BurgerStyle>
            <LeftNav open = {open} setOpen={setOpen} />
        </>
    )
}

export default Burger