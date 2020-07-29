import React, { useRef } from 'react'
import styled from 'styled-components'
import firebaseApp from '../../firebase'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const userEmail = useRef(null)
  const userPassword = useRef(null)
  const history = useHistory()

  //@ToDo- try and catch block
  async function loginWithFirebase(email, password) {
    await firebaseApp.signInWithEmailAndPassword(email, password)
    return history.push('/dashboard')
  }

  return (
    <StyledSection>
      <h1>Herzlich Willkommen. Bitte melde Dich an! </h1>
      <StyledForm
        onSubmit={(event) => (
          event.preventDefault(),
          loginWithFirebase(userEmail.current.value, userPassword.current.value)
        )}
      >
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
          <button type="submit">Login</button>
        </div>
      </StyledForm>
      <StyledDiv onClick={() => history.push('/register')}>
        Noch kein Account? Jetzt registrieren{' '}
      </StyledDiv>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 10px;
  h1 {
    color: black;
  }
`
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
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
