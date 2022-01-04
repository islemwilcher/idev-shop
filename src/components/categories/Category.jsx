
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { deletedCategory } from '../../actions/categories';

import { BsArrowRight } from 'react-icons/bs'

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

//style
import styled from 'styled-components'

//animation
import Zoom from 'react-reveal/Zoom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Actions = styled.div`
    display: flex;
    justify-content: space-around;
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
    overflow: hidden !important;

    &:hover {
        Img {
                transform: scale(1.2);
        }
    }
`

const Darken = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 320px;
    height: 280px;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    z-index: 5;
    border-radius: 15px;
    &:hover{
        background-color: rgba(0, 0, 0, 0.4);
    }
`

const Overlay = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    z-index: 10;
`

const OverlayTwo = styled.div`
    position: absolute;
    top: 60%;
    botom: 20%;
    left: 20px;
    color: white;
    z-index: 10;
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

const Img = styled.img`
    z-index:0;
    height: 280px;
    width: 320px;
    border-radius: 15px;
    margin: auto;
    transform: scale(1);
    transition: 0.3s ease-in-out;   
`
const Button = styled.button`
    border: none;
    color: ${(props) => props.bg};
    cursor: pointer;
    &:hover{
        box-shadow: 2px 2px 12px black;
    }
`

const Category = ({ item, visible, setCurrentId }) => {
    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem('idevProfile'))

    const navStyle = {
        textDecoration: 'none'
    }

    return (
        <Container>
            {user 
            ? <>{visible ?
                <Actions>
                    <Button bg='black' size="small" onClick={() => setCurrentId(item._id)}>
                        <MoreHorizIcon />
                    </Button>
                    <Button size="small" bg="red" onClick={() => dispatch(deletedCategory(item._id))}>
                        <DeleteIcon  />
                    </Button>
                </Actions>
                : null
            }
            </>
            : null
            }
            <>
            <Zoom>
                <Card>
                    <Img src={item.img} alt={item.name}  />
                    <Darken />
                    <Overlay>
                        <TypographyCatego>{item.name}</TypographyCatego>
                    </Overlay>
                    <OverlayTwo>
                        <Link style={navStyle} to={`/categories/${item.name}`} >
                        <Typography>View all <BsArrowRight /></Typography>
                        <Hr />
                        </Link>
                    </OverlayTwo>
                </Card>
            </Zoom>
            </>
            </Container>
    )
}

export default Category
