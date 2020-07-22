import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import TaskPageDetailsTimetable from '../components/TaskPageDetailsTimetable'
import MemosForm from '../components/MemoForm'

export default function TaskPageDetails({ tasks, updateTaskList }) {
  const { callNumber } = useParams()
  const [task, setTask] = useState(null)

  useEffect(() => {
    setTask(tasks.find((task) => task.call_number === callNumber))
  }, [])

  return (
    <StyledDiv>
      <StyledButton>{callNumber}</StyledButton>
      <TaskPageDetailsTimetable task={task} updateTaskList={updateTaskList} />
      <MemosForm task={task} updateTaskList={updateTaskList} />
    </StyledDiv>
  )
}

const StyledButton = styled.button`
  width: 90%;
  height: 80px;
  background-color: var(--primary-grey-mid);
  color: var(--primary-white);
  margin-top: 5px;
  font-size: 2em;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
`

const StyledDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
