import React from 'react'
import styled from 'styled-components'
import tasks from './tasks.json'
import TaskButton from './TaskButton'

export default function TaskListItem() {
  return (
    <StyledSection>
      {tasks.map((task) => (
        <TaskButton key={task.call_number} callNo={task.call_number} />
      ))}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`
