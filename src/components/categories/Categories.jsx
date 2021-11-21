
import { BsArrowRight } from 'react-icons/bs'

import SHIRTS from '../../assets/shirts.jpg'
import SHOES from '../../assets/shoes.jpg'
import HATS from '../../assets/hats.jpg'
import './styles.css'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 90%;
    min-height: 280px;
    margin: 30px auto;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Card = styled.div`
    margin: 30px auto;
    display: flex;
    flexDirection: column;
    justifyContent: space-between;
    border-radius: 15px;
    height: 100%;
    position: relative;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.9);
    cursor: pointer;
    &:hover {
        border-radius: 18px;
    }

`

const Overlay = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
`
const OverlayTwo = styled.div`
    position: absolute;
    top: 60%;
    botom: 20%;
    left: 20px;
    color: white;
`
const TypographyCatego = styled.h3`
    color: white;
    font-weight: 500;
    font-size: 18px;
`
const Typography = styled.h6`
    color: white;
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 0px;
    padding-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Hr = styled.hr`
    height: 1px;
    width: 80px;
    background-color: white;
    border: 1px solid white;
`

const Categories = () => {

    const navStyle = {
        textDecoration: 'none'
    }

    return (
        <Container>
            <Card>
                <img className='image' src={SHIRTS} alt="shirts" width="320px" height="280px" />
                <Overlay>
                    <TypographyCatego>Shirts</TypographyCatego>
                </Overlay>
                <OverlayTwo>
                    <Link style={navStyle} to='#'>
                    <Typography>View all <BsArrowRight /></Typography>
                    <Hr />
                    </Link>
                </OverlayTwo>
            </Card>
            <Card>
                <img className='image' src={SHOES} alt="shoes" width="320px" height="280px" />
                <Overlay>
                    <TypographyCatego>Shoes</TypographyCatego>
                </Overlay>
                <OverlayTwo>
                    <Link style={navStyle} to='#'>
                    <Typography>View all <BsArrowRight /></Typography>
                    <Hr />
                    </Link>
                </OverlayTwo>
            </Card>
            <Card>
                <img className='image' src={HATS} alt="hats" width="320px" height="280px" />
                <Overlay>
                    <TypographyCatego>Hats</TypographyCatego>
                </Overlay>
                <OverlayTwo>
                    <Link style={navStyle} to='#'>
                    <Typography>View all <BsArrowRight /></Typography>
                    <Hr />
                    </Link>
                </OverlayTwo>
            </Card>
        </Container>
    )
}

export default Categories
