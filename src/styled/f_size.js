import styled, {css} from 'styled-components'

//El código de BigText debe esta definido antes de ser usado

const BigText = css`
    font-size: 3rem;
`

//Vamos a reutilizar BigText
export const RedText = styled.p`
    background: red;
    ${BigText};
`

export const BlueText = styled.p`
    background: blue;
    ${BigText};
`