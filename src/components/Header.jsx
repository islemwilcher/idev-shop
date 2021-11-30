
import styled from 'styled-components'

const ImageContainer = styled.div``

const Details = styled.div`
    width: 500px;
    margin-left: 50px;
`

const Title = styled.h1`
    color: white;
    font-size: 55px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`

const SubTitle = styled.p`
    color: white;
    font-size: 22px;
    font-weight: 500;
    margin-top: 30px;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`

const Button = styled.button`
    background-color: green;
    color: white;
    padding: 10px 14px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    font-size: 22px;
    cursor: pointer;
    &:hover{
        font-weight: 500;
        box-shadow: 1px 1px 6px black;
        background-color: rgba(0, 208, 0, 0.8, 0.5)
    }
    @media (max-width: 768px) {
        font-size: 18px;
    }
`

const Header = () => {
    return (
        <ImageContainer className="imageContainer">
                <Details>
                    <Title>
                        Look yourself <br />the way it should!
                    </Title>
                    <SubTitle>Ship it in style with the limited edition HypnoSquirrel bundle, 
                        featuring a lightweight black or white long sleeve shirt, enamel pin, 
                        and holographic stickers.
                    </SubTitle>
                    <Button>Shop Now</Button>
                </Details>
            </ImageContainer>
    )
}

export default Header
