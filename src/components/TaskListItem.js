import React from 'react'
import styled from 'styled-components'
import tasks from './tasks.json'
import TaskButton from './TaskButton'

export default function TaskListItem() {
  return (
    <StyledSection>
      <ul>
        {tasks.map((task) => (
          <li>
            <TaskButton key={task.call_number} callNumber={task.call_number} />
          </li>
        ))}
      </ul>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  height: 100vh;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 0;
    width: 100%;

    li {
      width: 90%;
      list-style-type: none;
    }
  }
`
