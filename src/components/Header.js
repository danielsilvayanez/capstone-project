import React from 'react'
import styled from 'styled-components'
import ctsLogo from '../icons/ctsLogo.svg'
import dayjs from 'dayjs'

const currentDate = dayjs().format('DD.MM.YYYY')

export default function Header({ name }) {
  return (
    <StyledHeader>
      <h1>{currentDate}</h1>
      <h2>Hallo, {name}</h2>
      <img src={ctsLogo} alt="website logo" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: var(--primary-grey-mid);
  padding: 10px;
  box-shadow: 0 2px 5px 3px grey;

  h1,
  h2 {
    margin: 0;
    color: var(--primary-white);
  }
  img {
    position: fixed;
    top: -8px;
    right: -6px;
    height: 64px;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
  }
`
