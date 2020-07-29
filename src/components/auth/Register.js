import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import firebaseApp from '../../firebase/'
import { useHistory } from 'react-router-dom'

export default function Register() {
  const [isRegistered, setIsRegistered] = useState(false)
  const history = useHistory()

  const userName = useRef(null)
  const userEmail = useRef(null)
  const userPassword = useRef(null)

  async function registerToFirebase(name, email, password) {
    try {
      const newUser = await firebaseApp.createUserWithEmailAndPassword(
        email,
        password
      )
      await newUser.user.updateProfile({
        displayName: name,
      })
      return setIsRegistered(true)
    } catch (error) {
      alert('Registrierung konnte nicht abgeschlossen werden!', error)
    }
  }

  return (
    <StyledSection>
      <h1>Jetzt registrieren! </h1>
      {isRegistered ? (
        <p>You are registered!</p>
      ) : (
        <StyledForm
          onSubmit={(event) => (
            event.preventDefault(),
            registerToFirebase(
              userName.current.value,
              userEmail.current.value,
              userPassword.current.value
            )
          )}
        >
          <div>
            <label htmlFor="user-name">Vor- und Nachname</label>
            <input
              htmlId="user-name"
              name="user-name"
              type="text"
              ref={userName}
            />
          </div>
          <div>
            <label htmlFor="user-email">E-Mail</label>
            <input
              htmlId="user-email"
              name="user-email"
              type="email"
              ref={userEmail}
            />
          </div>
          <div>
            <label htmlFor="user-password">Password</label>
            <input
              htmlId="user-password"
              name="user-password"
              type="password"
              ref={userPassword}
            />
          </div>
          <div>
            <button type="submit">Create New User</button>
          </div>
        </StyledForm>
      )}
      <StyledDiv onClick={() => history.push('./login')}>
        Bereits registriert? Zum Login
      </StyledDiv>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 10px;
  h1 {
    color: var(--primary-grey-dark);
  }
`

const StyledForm = styled.form`
  padding: 10px;
  flex-direction: column;

  input {
    height: 50px;
    width: 100%;
    border-radius: 9px;
    font-size: 1.6em;
  }
  button {
    margin-top: 5px;
    background-color: var(--primary-grey-mid);
    color: var(--primary-white);
    border-radius: 9px;
    height: 50px;
    width: 100%;
  }
`
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
