
import styled from 'styled-components'

//components
import Bestselling from './bestselling/Bestselling'

const Wrapper = styled.div`
    width: 90%;
    margin: auto;
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
const Layout = styled.div`
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title2 = styled.h1`
    color: black;
    font-size: 28px;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`

const Best = () => {
    return (
        <>
            <Wrapper>
                <Layout>
                    <Title2>Bestselling</Title2>
                    <Button>View all</Button>
                </Layout>
            </Wrapper>
            <Bestselling />
        </>
            
    )
}

export default Best
