
import styled from 'styled-components'

//data 
import { categoriesData } from './categoriesData'

//components
import Category from './Category'
import Loading from './Loading'

const Container = styled.div`
    width: 80%;
    min-height: 280px;
    margin: 60px auto 30px auto;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 90%;
    }
`

const Categories = () => {

    const type = 'bars'
    const color = 'black'

    return (
        !categoriesData?.length 
        ? (
            <div>
            <Loading type={type} color={color} />
            </div>
        )
        : (
        <Container>
            {categoriesData.map((item) => (
                <Category item={item} key={item.id} />
            ))}
        </Container>)
    )
}

export default Categories
