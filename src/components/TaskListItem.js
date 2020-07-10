import React, { useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

export default function TaskListItem() {
  let timeStamp = dayjs().format('HH:mm')
  const [start, setStart] = useState('')
  const [arrival, setArrival] = useState('')
  const [done, setDone] = useState('')

  //Here LocalStorage could be used to save each timestamp changes!
  /*useEffect(() => {
    console.log(start)
  }, [start])*/

  function setTimestamp(status) {
    if (status === 'start') {
      setStart(timeStamp)
      alert('Startzeit wird gespeichert, Gute Fahrt!')
    } else if (status === 'arrival') {
      setArrival(timeStamp)
      alert('Ankunftszeit wird gespeichert. Viel Spaß beim Kunden!')
    } else {
      setDone(timeStamp)
      alert('Geschafft!! Glückwunsch.')
    }
  }

  return (
    <StyledStatusSection>
      <StyledButton primary onClick={() => setTimestamp('start')}>
        Start
      </StyledButton>
      <StyledButton onClick={() => setTimestamp('arrival')}>
        Ankunft
      </StyledButton>
      <StyledButton onClick={() => setTimestamp('done')}>Erledigt</StyledButton>
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
  background-color: ${(props) => (props.primary ? 'white' : 'none')};
  border: 1px solid var(--secondary-grey-dark);
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
