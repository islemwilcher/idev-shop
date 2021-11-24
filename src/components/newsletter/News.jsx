
import styled from 'styled-components'

const Container = styled.div`
    background: linear-gradient(#46056e, #320b4a, #64069e);
    width: 100%;
    padding: 0px;
    margin-top: 30px !important;
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
    font-weight: 500;
`
const Desc = styled.p`
    color: white;
    margin: 10px auto 0px 0px;
    font-size: 18px;
    font-weight: 300;
`
const Right = styled.div`
    flex: 1;
    margin-right: 40px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        margin: auto;
        align-items: center;
        justify-content:center;
    }
`

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        margin: auto;
        width: 100%;
`

const WrapperL = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        margin: auto;
        width: 100%;
`

const Input = styled.input`
    border: none;
    width: 80%;
    margin: auto;
    font-size: 22px;
    padding: 10px 20px;
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
                <WrapperL>
                <Title>Join our Email list</Title>
                <Desc>
                    Be the first to know about new product releases,
                    exclusive deals, and more with our email newsletter.
                </Desc>
                </WrapperL>
            </Left>
            <Right>
                <Wrapper>
                <SearchContainer>
                    <Input placeholder='Enter your Email' />
                </SearchContainer>
                <Button>Subscribe</Button>
                </Wrapper>
            </Right>
        </Container>
    )
}

export default News
