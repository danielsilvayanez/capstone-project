import React from 'react'
import styled from 'styled-components'
import ctsLogo from '../icons/ctsLogo.svg'

let currentDate = new Date()
const day = String(currentDate.getDate()).padStart(2, '0')
const month = String(currentDate.getMonth() + 1).padStart(2, '0')
const year = currentDate.getFullYear()

currentDate = month + '.' + day + '.' + year

export default function Header({ name }) {
  return (
    <StyledHeader>
      <h1>{currentDate}</h1>
      <h1>Hallo, {name}</h1>
      <img src={ctsLogo} alt="website logo" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  background-color: var(--primary-grey-mid);
  padding: 10px;
  height: 100px;
  box-shadow: 0 2px 5px 3px grey;

  img {
    position: fixed;
    top: -8px;
    right: -6px;
    height: 64px;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
  }
`
