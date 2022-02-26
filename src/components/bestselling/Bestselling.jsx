
import { useSelector } from 'react-redux'

import styled from 'styled-components'

//components
import Product from '../products/Product'

const Container = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

const Wrapper = styled.div`
    width: 100%;
    min-height: 300px;
    margin: 30px auto;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
        margin: 10px auto;
        justify-content: space-between;
    }
`

const BestProducts = () => {

    const {products} = useSelector((state) =>  state.products)

    return (
        <Container>
            <Wrapper>
            {
            products
            .sort((A, B) => A.sellCounter > B.sellCounter ? -1 : 1)
            .slice(0,4)
            .map(item => (
                <Product item={item} key={item._id} />
            )
            )
            }
            </Wrapper>
        </Container>
    )
}

export default BestProducts
