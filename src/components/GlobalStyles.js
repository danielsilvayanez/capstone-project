import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
    --primary-grey-mid: #464646;
    --secondary-grey-dark: #242424;
    --secondary-grey-light: #C3C3C3;
    --primary-white: #FFFFFF;
    
    scroll-behavior: smooth;
}
    
* {
    box-sizing: border-box;
    font-family: Raleway, Helvetica, sans-serif;
}
body {
  margin: 0;
  height: 100vh;
  font-family: fantasy;
}

header{
position: fixed;
width: 100%;
height: 48px;
}

h1 {
font-size: 24px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: 0.67px;
color: #ffffff;
margin:0;
}
`
