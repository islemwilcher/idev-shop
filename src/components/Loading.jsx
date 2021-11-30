
import styled from 'styled-components'

import ReactLoading from 'react-loading'

const Container = styled.div`
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`
const Loading = ({ type, color }) => (
    <Container>
	    <ReactLoading type={type} color={color} height={300} width={300} />
    </Container>
);

export default Loading;