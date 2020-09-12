import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import TaskButton from '../TaskButton/TaskButton'

export default function TaskList({ tasks, currentDate }) {
  const history = useHistory()

  return (
    <StyledUl>
      <h1>{currentDate}</h1>
      {tasks.map((task) => (
        <li key={task.call_number} data-testid="call_number-test">
          <TaskButton
            onClick={() => setPathTo(`/taskpagedetails/${task.call_number}`)}
            btnText={task.call_number}
          />
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
  width: 100%;
  list-style-type: none;
  padding: 0;

  h1 {
    margin-top: 20px;
    color: var(--secondary-grey-dark);
    width: 100%;
    text-align: center;
  }

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`
