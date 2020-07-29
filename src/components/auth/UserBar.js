import React, { useContext } from 'react'
import LoginContext from './loginContext'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default function UserBar() {
  const { user, firebaseApp } = useContext(LoginContext)
  const history = useHistory()

  async function logoutFromFirebase() {
    await firebaseApp.signOut()
    history.push('/logout')
  }

  return (
    <section>
      {user ? (
        <>
          <StyledButton onClick={logoutFromFirebase}>Logout</StyledButton>
        </>
      ) : (
        <></>
      )}
    </section>
  )
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  right: 0;
  margin: 5px;
  border-radius: 50%;
  background-color: var(--primary-grey-mid);
  color: var(--primary-white);
  height: 70px;
  width: 70px;
  border: 1px solid black;
`
