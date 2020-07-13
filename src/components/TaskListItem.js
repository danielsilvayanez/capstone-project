import React, { useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

export default function TaskListItem() {
  let timeStamp = dayjs().format('HH:mm')
  const [start, setStart] = useState('')
  const [arrival, setArrival] = useState('')
  const [done, setDone] = useState('')

  function setTimestamp(status) {
    if (status === 'start') {
      setStart(timeStamp)
      alert('Los geht´s, Gute Fahrt!')
    } else if (status === 'arrival') {
      setArrival(timeStamp)
      alert('Angekommen. Viel Erfolg beim Kunden!')
    } else {
      setDone(timeStamp)
      alert('Du hast es geschafft!! Glückwunsch.')
    }
  }

  return (
    <StyledStatusSection>
      <StyledButton
        className={start ? 'active' : ''}
        onClick={() => {
          setTimestamp('start')
        }}
      >
        Start
      </StyledButton>
      <StyledButton
        className={arrival ? 'active' : ''}
        onClick={() => setTimestamp('arrival')}
      >
        Ankunft
      </StyledButton>
      <StyledButton
        className={done ? 'active' : ''}
        onClick={() => setTimestamp('done')}
      >
        Erledigt
      </StyledButton>
      <StyledDiv>
        <div>{start}</div>
        <div>{arrival}</div>
        <div>{done}</div>
      </StyledDiv>
    </StyledStatusSection>
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
