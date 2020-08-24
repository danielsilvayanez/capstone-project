import React, { useContext } from 'react'
import styled from 'styled-components'
import ctsLogo from '../../icons/CTSLogo.jpg'
import LoginContext from '../auth/loginContext'

export default function Header() {
  const { user } = useContext(LoginContext)

  return (
    <StyledHeader>
      <img src={ctsLogo} alt="website logo" />
      {user && <h1>Moin {user.displayName}!</h1>}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: relative;
  background-color: var(--primary-grey-mid);
  padding: 10px;
  box-shadow: -1px 5px 8px 0 rgba(0, 0, 0, 0.5);

  h1 {
    position: absolute;
    top: 40px;
    width: 190px;
    left: 180px;
    margin: 0;
    color: var(--primary-white);
  }
  img {
    position: absolute;
    top: 0;
    left: 20px;
    height: 110px;
    width: 150px;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
    box-shadow: -1px 5px 8px 0 rgba(0, 0, 0, 0.5);
  }
`
