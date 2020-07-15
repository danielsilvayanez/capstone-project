import React, { useState } from 'react'
import styled from 'styled-components'

export default function MemoArea() {
  const [memo, setMemo] = useState('')

  return (
    <StyledSection>
      <form onSubmit={handleSubmit}>
        <label htmlFor="memo">Notiz: </label>
        <input
          name="memo"
          type="text"
          onChange={handleChange}
          placeholder="z.B. CPU ausgetauscht"
        />
        <button type="submit">senden</button>

        <section>
          <ul>
            <li>{memo}</li>
          </ul>
        </section>
      </form>
    </StyledSection>
  )

  function handleSubmit(event) {
    console.log(event.target.memo.value)
    event.preventDefault()
  }

  function handleChange(event) {
    setMemo(event.target.value)
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
