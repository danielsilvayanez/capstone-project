import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import TaskButton from '../components/TaskButton'

export default function TaskList({ tasks }) {
  const history = useHistory()

  return (
    <StyledUl>
      {tasks.map((task) => (
        <li key={task.call_number} data-testid="call_number-test">
          <TaskButton
            onClick={() => setPathTo(`/taskpagedetails/${task.call_number}`)}
            key={task.call_number}
            callNumber={task.call_number}
            data-testid="button-test-single"
          >
            {task.call_number}
          </TaskButton>
        </li>
      ))}
    </StyledUl>
  )
  function setPathTo(path) {
    history.push(path)
  }
}

const StyledUl = styled.ul`
  margin-top: 10px;
  height: 100vh;
  width: 100%;
  list-style-type: none;

  padding: 0;

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`
