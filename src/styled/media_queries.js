import styled, {createGlobalStyle} from 'styled-components'

const desktopStartWidth = 996;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const Box = styled.div`
    ${mobile}{
        width: 100%;
    }
`

//Si quisieramos modificar los estilos del body
export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        padding: 0px;
    }
`