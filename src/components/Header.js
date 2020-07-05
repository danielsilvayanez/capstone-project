import React from 'react'
import styled from 'styled-components'
import Logo from '../icons/C&TSLogo.jpg'

let currentDate = new Date()
const day = String(currentDate.getDate()).padStart(2, '0')
const month = String(currentDate.getMonth() + 1).padStart(2, '0') //January is 0!
const year = currentDate.getFullYear()

currentDate = month + '.' + day + '.' + year

export default function Header() {
  return (
    <StyledHeader>
      <h1>{currentDate}</h1>
      <h1>Hallo, Fahrer</h1>
      <img src={Logo} alt="website logo" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  border: solid 1px #464646;
  background-color: #464646;
  padding: 10px;
  height: 100px;

  img {
    position: fixed;
    top: 0;
    right: 2px;
    height: 64px;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
    box-shadow: -1px 5px 8px 0 rgba(0, 0, 0, 0.5);
    border: solid 1px #464646;
    background-color: #464646;
}
  }
`
