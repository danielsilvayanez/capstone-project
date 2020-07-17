import React, { useEffect, useState } from 'react'
import TaskListItem from '../components/TaskListItem'
import TaskButton from '../components/TaskButton'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

export default function TaskPageDetails({ tasks }) {
  const { callNumber } = useParams()
  const [task, setTask] = useState(null)

  useEffect(() => {
    setTask(tasks.find((task) => task.call_number === callNumber))
  }, [tasks])

  return (
    <StyledDiv>
      {task && (
        <>
          <TaskButton callNumber={task.call_number}>
            {task.call_number}
          </TaskButton>
          <TaskListItem task={task} setTask={setTask} />
        </>
      )}
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
