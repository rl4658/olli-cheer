import styled from 'styled-components';
import stars from '../stars.png'

export const StyledTetrisWrapper = styled.div`
width: 100vw;
height: 100vh;
background: url(${stars}) #000;
background-size: cover;
overflow: hidden;
`
export const StyledTetris = styled.div`
    display: flex;
    align-items: flext-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 100%;
        display: block;
        max-width: 200px;
        padding: 0 20px;
    }
`