import React, { useState } from 'react'
import styled from 'styled-components'
import firebaseApp from '../../firebase'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Modal from 'react-modal'

export default function Login() {
  const history = useHistory()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [errorCounter, setErrorCounter] = useState(0)
  const initialValues = { email: '', password: '' }

  function openModal() {
    setIsOpen(true)
    setErrorCounter(0)
  }

  function closeModal() {
    setIsOpen(false)
    history.push('/login')
  }

  let loginSchema = yup.object().shape({
    email: yup.string().email('Keine gültige E-Mail'),
    password: yup.string().min(6, 'Bitte mindestens 6 Zeichen angeben'),
  })

  async function loginWithFirebase(email, password) {
    try {
      await firebaseApp.signInWithEmailAndPassword(email, password)
      return history.push('/')
    } catch (error) {
      errorCounter > 4 ? openModal() : setErrorCounter(errorCounter + 1)
    }
  }
  return (
    <>
      <StyledSection>
        <h1>Herzlich willkommen. Bitte melde Dich an! </h1>
        <div>
          <StyledModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <p>Es gibt ein Authentifierzungsproblem!</p>
            <button onClick={closeModal}>close</button>
          </StyledModal>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values) =>
            loginWithFirebase(values.email, values.password)
          }
        >
          {({ isSubmitting, isValid, resetForm }) => (
            <StyledForm>
              <StyledField
                name="email"
                type="email"
                placeholder="E-Mail eingeben"
                required
              />
              <StyledError>
                <ErrorMessage name="email" />
              </StyledError>
              <StyledField
                name="password"
                type="password"
                placeholder="Passwort eingeben"
                required
              />
              <StyledError>
                <ErrorMessage name="password" />
              </StyledError>
              <StyledButton type="submit">login</StyledButton>
            </StyledForm>
          )}
        </Formik>
        <StyledDiv onClick={() => history.push('/register')}>
          Noch kein Account? Jetzt registrieren
        </StyledDiv>
      </StyledSection>
    </>
  )
}

const StyledSection = styled.section`
  padding: 10px;
  h1 {
    margin-top: 10px;
    color: var(--secondary-grey-dark);
  }
`
const StyledModal = styled(Modal)`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--primary-grey-mid);
  color: var(--primary-white);
  height: 60vh;
  margin-top: 120px;

  button {
    margin-top: 5px;
    background-color: var(--primary-white);
    color: var(--secondary-grey-dark);
    border-radius: 9px;
    height: 50px;
    width: 50%;
  }
`

const StyledField = styled(Field)`
  margin-top: 5px;
  height: 50px;
  width: 100%;
  border-radius: 9px;
  font-size: 1.6em;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
`
const StyledError = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2px;
  color: red;
`

const StyledForm = styled(Form)`
  padding: 10px;
  flex-direction: column;
`

const StyledButton = styled.button`
  margin-top: 5px;
  background-color: var(--primary-grey-mid);
  color: var(--primary-white);
  border-radius: 9px;
  height: 50px;
  width: 100%;
`
