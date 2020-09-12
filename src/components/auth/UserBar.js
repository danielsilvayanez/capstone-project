import React, { useContext } from 'react'
import LoginContext from './loginContext'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillLeftCircle, AiOutlineCalendar } from 'react-icons/ai'

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
          {location.pathname !== '/dashboard' && (
            <>
              <StyledBackButton onClick={() => history.goBack()}>
                back
              </StyledBackButton>
            </>
          )}
          <StyledLogoutButton onClick={logoutFromFirebase}>
            Logout
          </StyledLogoutButton>
          <StyledCalendarButton onClick={() => history.push('/calendar')}>
            cal
          </StyledCalendarButton>
        </>
      )}
    </section>
  )
}

const StyledLogoutButton = styled.div`
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
  cursor: pointer;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
`
const StyledBackButton = styled.nav`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--primary-grey-mid);
  bottom: 70px;
  right: 5px;
  cursor: pointer;
  color: var(--primary-white);
  height: 60px;
  width: 60px;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
`

const StyledCalendarButton = styled.nav`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--primary-grey-mid);
  bottom: 65px;
  right: 0.7px;
  cursor: pointer;
  color: var(--primary-white);
  height: 60px;
  width: 60px;
  bottom: 5px;
  left: 5px;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
`
