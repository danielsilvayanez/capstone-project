import React from 'react'
import TaskListItem from '../components/TaskListItem'
import TaskButton from '../components/TaskButton'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

export default function TaskPageDetails() {
  const { callNumber } = useParams()

  return (
    <StyledDiv>
      <TaskButton callNumber={callNumber}>{callNumber}</TaskButton>
      <TaskListItem />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
