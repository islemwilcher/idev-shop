
import styled from 'styled-components'

const Container = styled.div`
    background-color: #992ad1;
    width: 100%;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Left = styled.div`
    flex: 1;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        margin: 30px auto auto 40px;
        justify-content:center;
    }
`
const Title = styled.h1`
    color: white;
    margin: 0px auto 0px 0px;
    font-size: 30px;
    font-weight: 700;
`
const Desc = styled.h6`
    color: white;
    margin: 10px auto 0px 0px;
    font-size: 22px;
    font-weight: 300;
`
const Right = styled.div`
    flex: 1;
    margin-right: 40px;
    height: 90px;
    display: flex;
    align-items: flex-end;
    @media (max-width: 768px) {
        margin: auto;
        align-items: center;
        justify-content:center;
    }
`
const Input = styled.input`
    border: none;
    width: 80%;
    font-size: 22px;
    padding: 10px 20px;
    margin-right: 5px;
    border-radius: 5px;
`
const SearchContainer = styled.div`
flex: 8;
    border-radius: 10px;
    width: 90%;
    display: flex;
    justify-content: flex-end;
    padding: 0px;
    @media (max-width: 768px) {
        width:80%;
    }
`
const Button = styled.button`
    flex: 2;
    background-color: green;
    color: white;
    padding: 10px 14px;
    border: none;
    border-radius: 5px;
    font-size: 22px;
    cursor: pointer;
    margin: 5px;
    &:hover{
        font-weight: 500;
        box-shadow: 1px 1px 6px black;
        background-color: rgba(0, 208, 0, 0.8, 0.5)
    }
    @media (max-width: 768px) {
        font-size: 18px;
    }
`

const News = () => {
    return (
        <Container>
            <Left>
                <Title>Join our Email list</Title>
                <Desc>
                    Be the first to know about new product releases,
                    exclusive deals, and more with our email newsletter.
                </Desc>
            </Left>
            <Right>
                <SearchContainer>
                    <Input placeholder='Enter your Email' />
                </SearchContainer>
                <Button>Subscribe</Button>
            </Right>
        </Container>
    )
}

export default News
