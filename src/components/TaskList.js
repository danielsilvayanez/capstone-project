import React from 'react'
import styled from 'styled-components'
import tasks from './tasks.json'
import { NavLink } from 'react-router-dom'
import TaskButton from '../components/TaskButton'

export default function TaskList() {
  return (
    <StyledSection>
      {tasks.map((task) => (
        <StyledNavLink
          key={task.call_number}
          to={`/taskpagedetails/${task.call_number}`}
        >
          <TaskButton callNumber={task.call_number}>
            {task.call_number}
          </TaskButton>
        </StyledNavLink>
      ))}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`
const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  color: var(--primary-white);
`
