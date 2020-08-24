/*(values) =>
            registerToFirebase(values.name, values.email, values.password)
*/

import React, { useState } from 'react'
import styled from 'styled-components'
import firebaseApp from '../../firebase/'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function Register() {
  const [isRegistered, setIsRegistered] = useState(false)
  const history = useHistory()
  const initialValues = { name: '123', email: '', password: '' }

  let registrationSchema = yup.object().shape({
    name: yup
      .string('Bitte keine Sonderzeichen')
      .required('Bitte Namen eingeben'),
    email: yup
      .string()
      .email('Keine gültige E-Mail')
      .required('Bitte E-Mail-Adresse angeben'),
    password: yup
      .string()
      .min(6, 'Bitte mindestens 6 Zeichen angeben')
      .required('Bitte gültiges Passwort eingeben'),
  })

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
        <form
          onSubmit={(event) => {
            event.preventDefault()
            console.log('moin')
          }}
        >
          <div>
            <label htmlFor="username">Vor- und Nachname</label>
            <input
              htmlFor="username"
              name="username"
              type="text"
              placeholder="Namen eingeben"
            />
          </div>

          <div>
            <label htmlFor="useremail">E-Mail</label>
            <input
              htmlFor="useremail"
              name="useremail"
              type="email"
              placeholder="Email eingeben"
            />
          </div>

          <div>
            <label htmlFor="userpassword">Password</label>
            <input
              htmlFor="userpassword"
              name="userpassword"
              type="password"
              placeholder="Password eingeben"
            />
          </div>

          <div>
            <button type="submit">Create New User</button>
          </div>
        </form>
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

const StyledForm = styled(Form)`
  padding: 10px;
  flex-direction: column;
`
const StyledField = styled(Field)`
  margin-top: 5px;
  height: 50px;
  width: 100%;
  border-radius: 9px;
  font-size: 1.6em;
`
const StyledButton = styled.button`
  margin-top: 5px;
  background-color: var(--primary-grey-mid);
  color: var(--primary-white);
  border-radius: 9px;
  height: 50px;
  width: 100%;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const StyledError = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2px;
  color: red;
`
