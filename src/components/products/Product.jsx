
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { deleteProduct } from '../../actions/products'

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

//style
import styled from 'styled-components'

//animation
import Zoom from 'react-reveal/Zoom'

const Content = styled.div`
    text-align: center;
    margin: auto
`

const Card = styled.div`
    margin: 30px auto;
    display: flex;
    flexDirection: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 280px;
    width: 280px;
    position: relative;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    overflow: hidden !important;

    &:hover {
        box-shadow: 2px 2px 12px #94928e;

        Img {
                transform: scale(1.1);
        }
    }

`

const Darken = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 280px;
    width: 280px;
    background-color: rgba(0, 0, 0, 0.2);
    background-blend-mode: darken;
    z-index: 5;
    border-radius: 10px;
    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
    }
`

const CardTitle = styled.h3`
    color: black;
    font-weight: 500;
    font-size: 18px;
    margin: 0px;
`

const Price = styled.h6`
    color: black;
    font-weight: 300;
    font-size: 18px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    background-size: contain;
    z-index:0;
    height: 200px;
    width: 200px;
    border-radius: 10px;
    transform: scale(1);
    transition: 0.3s ease-in-out;
`
const Actions = styled.div`
    display: flex;
`
const Button = styled.button`
    width: 20%;
    border: none;
    border-radius: 5px;
    margin: 2px auto;
    font-size: 18px;
    padding: 0px;
    cursor: pointer;
    color: ${(props) => props.bg};
    &:hover{
        box-shadow: 2px 2px 12px black;
    }
`

const Product = ({ item, visible, setCurrentId }) => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const openProduct = () => {
        navigate(`/products/find/${item._id}`)
    }

    const user = JSON.parse(localStorage.getItem('idevProfile'))

    const location = useLocation()

    if(location.pathname.split('/')[1] === 'manageProducts') {
        visible = true
    }

    return (
            <Content>
                {user 
            ? <>{visible ?
                <Actions>
                    <Button bg='black' size="small" onClick={() => setCurrentId(item._id)}>
                        <MoreHorizIcon />
                    </Button>
                    <Button size="small" bg="red" onClick={() => dispatch(deleteProduct(item._id))}>
                        <DeleteIcon  />
                    </Button>
                </Actions>
                : null
            }
            </>
            : null
            }
                <div onClick={openProduct}>
                    <Zoom>
                    <Card>
                        <Img src={item.img} alt={item.name} />
                        <Darken />
                    </Card>
                    <CardTitle>{item.name}</CardTitle>
                    <Price>{item.price}</Price>
                    </Zoom>
                </div>
            </Content>
    )
}

export default Product
