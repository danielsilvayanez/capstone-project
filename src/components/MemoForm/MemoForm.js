import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MemoList from '../MemoList/MemoList'

export default function MemoForm({ task, updateTaskList }) {
  const [memo, setMemo] = useState('')

  useEffect(() => {
    if (task) {
      setMemo(task.memos)
    }
  }, [task])

  return (
    <StyledSection>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Notiz:
          <input
            data-testid="input-test"
            id="name"
            name="memo"
            value={memo.value}
            type="text"
            minLength="3"
            placeholder="Bsp: CPU ausgetauscht"
            required
          />
          {memo.length <= 3 && (
            <StyledError>Mindestens 3 Zeichen eingeben!</StyledError>
          )}
        </label>
        <button type="submit"> speichern </button>
      </form>
      <MemoList task={task} />
    </StyledSection>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const tempMemo = event.target.memo.value
    setMemo(tempMemo)
    const newMemos = [...task.memos, tempMemo]
    const newTask = { ...task, memos: newMemos }
    updateTaskList(newTask, task.call_number)
    event.target.memo.value = ''
  }
}

const StyledSection = styled.section`
  margin-top: 10px;
  padding: 10px;
  width: 90%;

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      width: 100%;
      font-size: 1em;
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
    }
  }
`
const StyledError = styled.div`
  color: var(--tertiary);
  font-size: 0.8rem;
  font-weight: 300;
`
