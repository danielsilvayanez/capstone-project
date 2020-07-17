import React, { useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import MemoForm from '../components/MemoForm'

export default function TaskListItem({ setTask, task }) {
  let timeStamp = dayjs().format('HH:mm')
  const [start, setStart] = useState('')
  const [arrival, setArrival] = useState('')
  const [done, setDone] = useState('')
  return (
    <StyledStatusSection>
      <StyledButton
        data-testid="button-test"
        className={start ? 'active' : ''}
        onClick={() => {
          setTimestamp('start')
        }}
      >
        Start
      </StyledButton>
      <StyledButton
        data-testid="button-test"
        className={arrival ? 'active' : ''}
        onClick={() => setTimestamp('arrival')}
      >
        Ankunft
      </StyledButton>
      <StyledButton
        data-testid="button-test"
        className={done ? 'active' : ''}
        onClick={() => setTimestamp('done')}
      >
        Erledigt
      </StyledButton>
      <StyledDiv>
        <div data-testid="div-test">{start}</div>
        <div data-testid="div-test">{arrival}</div>
        <div data-testid="div-test">{done}</div>
      </StyledDiv>
      <MemoForm task={task} memos={task.memos} addMemo={addMemo} />
    </StyledStatusSection>
  )

  function addMemo(newMemo) {
    const newMemos = [...task.memos, newMemo]
    const newTask = { ...task, memos: newMemos }
    setTask(newTask)
  }

  function setTimestamp(status, callNumber) {
    if (status === 'start') {
      setStart(timeStamp)
    } else if (status === 'arrival') {
      setArrival(timeStamp)
    } else {
      setDone(timeStamp)
    }
  }
}

const StyledStatusSection = styled.section`
  width: 90%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`

const StyledButton = styled.button`
  width: 33.3%;
  height: 51px;
  background: var(--primary-white);
  border: 1px solid var(--secondary-grey-dark);

  &.active {
    color: limegreen;
  }
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  height: 51px;
  color: var(--secondary-grey-dark);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3%;
    height: 51px;
    border: 1px solid var(--secondary-grey-dark);
  }
`
