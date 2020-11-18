import React, { useContext } from 'react'
import LoginContext from './loginContext'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillLeftCircle } from 'react-icons/ai'

export default function UserBar() {
  const { user, firebaseApp } = useContext(LoginContext)
  const history = useHistory()
  const location = useLocation()

  async function logoutFromFirebase() {
    await firebaseApp.signOut()
    history.push('/logout')
  }

  return (
    <section>
      {user && (
        <>
          {location.pathname !== '/' && (
            <nav onClick={() => history.goBack()}>
              <StyledBackArrow />
            </nav>
          )}
          <StyledButton onClick={logoutFromFirebase}>Logout</StyledButton>
        </>
      )}
    </section>
  )
}

const StyledButton = styled.div`
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
  height: 60px;
  width: 60px;
`
const StyledBackArrow = styled(AiFillLeftCircle)`
  position: absolute;
  bottom: 65px;
  right: 0.7px;
  cursor: pointer;
  color: var(--primary-grey-mid);
  font-size: 70px;
`
