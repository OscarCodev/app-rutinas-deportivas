import styled,{css} from 'styled-components'
import flecha from '../assets/images/flecha.png'

export const Row = styled.div`
    display: grid;
    grid-template-columns: 50% 50%; //Definimos 2 columnas, los elementos que pongamos se iran apilando
    max-width: 1200px;
    margin: auto;
    img{
        width: 100%;
    }
`
export const Grid2 = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`

export const Img = styled.img`
    width: 100%;
    border-radius: 50px;
    ${({active}) => active ? //si el prop active es true ejecutamos, y cómo determinamos si active es true o false ?
    'border: 4px solid coral; z-index: 1'//estos estilos 
    :'border: 4px solid transparent'}// de lo contrario 
`
const Btn = css`
    display: inline-block;
    cursor: pointer;
    background-image: url(${flecha});
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
`
//Todo lo que vamos a necesitar lo exportamos

export const BtnLeft = styled.span`
    ${Btn}//dentro de un span reutilizamos el Boton que creamos como constante
    margin-right: 10px;
`

export const BtnRight = styled.span`
    ${Btn}
    transform: rotate(180deg);
    margin-left: 10px;
`

