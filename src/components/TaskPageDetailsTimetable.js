import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

export default function TaskPageDetailsTimetable({ task, updateTaskList }) {
  const [startTime, setStartTime] = useState('')
  const [arrivalTime, setArrivalTime] = useState('')
  const [doneTime, setDoneTime] = useState('')

  useEffect(() => {
    if (task) {
      setStartTime(task.start)
      setArrivalTime(task.arrival)
      setDoneTime(task.done)
    }
  }, [task])

  function getCurrentTime() {
    return dayjs().format('HH:mm')
  }

  function onClickStartTime(status) {
    const time = getCurrentTime()
    if (status === 'start') {
      setStartTime(time)
    } else if (status === 'arrival') {
      setArrivalTime(time)
    } else {
      setDoneTime(time)
    }
    const newTask = { ...task, [status]: time }
    updateTaskList(newTask, task.call_number)
  }

  return (
    <>
      <StyledStatusSection>
        <StyledButton
          data-testid="button-test-start"
          className={startTime ? 'active' : ''}
          onClick={() => onClickStartTime('start')}
        >
          Start
        </StyledButton>
        <StyledButton
          data-testid="button-test-arrival"
          className={arrivalTime ? 'active' : ''}
          onClick={() => onClickStartTime('arrival')}
        >
          Ankunft
        </StyledButton>
        <StyledButton
          data-testid="button-test-done"
          className={doneTime ? 'active' : ''}
          onClick={() => onClickStartTime('done')}
        >
          Erledigt
        </StyledButton>
        <StyledDiv>
          <div data-testid="div-test-start">{startTime}</div>
          <div data-testid="div-test-arrival">{arrivalTime}</div>
          <div data-testid="div-test-done">{doneTime}</div>
        </StyledDiv>
      </StyledStatusSection>
    </>
  )
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
