import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
    --primary-grey-mid: #464646;
    --secondary-grey-dark: #242424;
    --secondary-grey-light: #C3C3C3;
    --primary-white: #FFFFFF;
}
    
* {
    box-sizing: border-box;
    font-family: Raleway, Helvetica, sans-serif;
}
body {
  margin: 0;
  
}


h1 {
font-size: 24px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: 0.67px;
color: var(--primary-white);
margin:0;
}
`
