import React, { useState } from 'react'
import styled from 'styled-components'
import tasks from './tasks.json'
import dayjs from 'dayjs'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

let timeStamp = dayjs().format('HH:mm:ss')

export default function TaskListItem() {
  const [startTimestamp, setStartTimestamp] = useState(false)
  const [arrivalTimestamp, setArrivalTimestamp] = useState(false)
  const [doneTimestamp, setDoneTimestamp] = useState(false)

  function setTimeStampStart() {
    if (
      startTimestamp === false &&
      arrivalTimestamp === false &&
      doneTimestamp === false
    ) {
      setStartTimestamp(timeStamp)
      setArrivalTimestamp('')
      setDoneTimestamp('')
    } else {
      alert('Naaaaat')
    }
  }

  function setTimeStampArrival() {
    if (
      startTimestamp === true &&
      arrivalTimestamp === false &&
      doneTimestamp === false
    ) {
      setArrivalTimestamp(timeStamp)
      setDoneTimestamp('')
    } else {
      alert('Naaaaat')
    }
  }

  function setTimeStampDone() {
    if (
      startTimestamp === true &&
      arrivalTimestamp === true &&
      doneTimestamp === false
    ) {
      setDoneTimestamp(timeStamp)
    } else {
      alert('Naaaaat')
    }
  }
  return (
    <StyledSection>
      {tasks.map((task) => (
        <StyledAccordion key={task.call_number} allowZeroExpanded={true}>
          <StyledAccordionItem>
            <AccordionItemHeading>
              <StyledAccordionButton>{task.call_number}</StyledAccordionButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <StyledStatusSection>
                <StyledButton onClick={setTimeStampStart}>Start</StyledButton>
                <StyledButton onClick={setTimeStampArrival}>
                  Ankunft
                </StyledButton>
                <StyledButton onClick={setTimeStampDone}>Erledigt</StyledButton>
                <StyledDiv>
                  <div>{startTimestamp}</div>
                  <div>{arrivalTimestamp}</div>
                  <div>{doneTimestamp}</div>
                </StyledDiv>
              </StyledStatusSection>
            </AccordionItemPanel>
          </StyledAccordionItem>
        </StyledAccordion>
      ))}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`
const StyledAccordion = styled(Accordion)`
  width: 90%;
`
const StyledAccordionItem = styled(AccordionItem)``

const StyledAccordionButton = styled(AccordionItemButton)`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  background-color: var(--primary-white);
  font-size: 36px;
  font-weight: bold;
  letter-spacing: normal;
  color: var(--primary-grey-mid);
  box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.38);
  width: 100%;
  padding: 20px;

  :hover {
    background-color: var(--primary-grey-mid);
    color: var(--primary-white);
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  }
`
const StyledStatusSection = styled.section`
  background-color: var(--primary-white);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`

const StyledButton = styled.button`
  width: 33.3%;
  height: 51px;
  background-color: #ffffff;
  border: none;
`
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  height: 51px;
  background-color: var(--primary-white);
`
