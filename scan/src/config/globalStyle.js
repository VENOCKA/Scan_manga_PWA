import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body{
    background-color: ${props => props.theme.secondary};
    padding-top: 100px;
}

p{
    color: ${props => props.theme.p}
}

tr{
    color: ${props => props.theme.p}
}
`

export default GlobalStyle