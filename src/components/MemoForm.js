import React, { useState } from 'react'
import styled from 'styled-components'

export default function MemoArea({ memos, addMemo }) {
  const [memo, setMemo] = useState('')

  return (
    <StyledSection>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Notiz:
          <input
            id="name"
            name="memo"
            value={memo.value}
            type="text"
            minLength="3"
            placeholder="Bsp: CPU ausgetauscht"
            autoFocus
            required
          />
          {memo.length <= 3 && (
            <StyledError>Please use at least 3 characters</StyledError>
          )}
          {memo.length >= 70 && (
            <div>Please use a maximum of 70 characters</div>
          )}
        </label>
        <button type="submit"> speichern </button>
      </form>

      <p>Notizen</p>
      <ul>
        {memos.map((memo, index) => (
          <li key={index}>{memo}</li>
        ))}
      </ul>
    </StyledSection>
  )

  function handleSubmit(event) {
    event.preventDefault()
    setMemo(event.target.name.value)
    addMemo(event.target.name.value)
    event.target.memo.value = ''
  }
}

const StyledSection = styled.section`
  margin-top: 10px;
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;

    label {
    }

    input {
      height: 50px;
      width: 100%;
    }

    button {
      margin-top: 5px;
      background-color: var(--primary-grey-mid);
      color: var(--primary-white);
      border-radius: 9px;
      height: 50px;
    }

    section {
      margin-top: 10px;
      border: 1px solid black;
    }
    ul {
      margin: 0px;
    }
  }
`
const StyledError = styled.div`
  color: var(--tertiary);
  font-size: 0.8rem;
  font-weight: 300;
`
