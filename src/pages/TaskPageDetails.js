import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import TaskPageDetailsTimetable from '../components/TaskPageDetails/TaskPageDetailsTimetable'
import MemosForm from '../components/MemoForm/MemoForm'
import TaskButton from '../components/TaskButton/TaskButton'

export default function TaskPageDetails({ tasks, updateTaskList }) {
  const { callNumber } = useParams()
  const [task, setTask] = useState(null)

  useEffect(() => {
    setTask(tasks.find((task) => task.call_number === callNumber))
  })

  return (
    <StyledDiv>
      <TaskButton btnText={callNumber}></TaskButton>
      <TaskPageDetailsTimetable task={task} updateTaskList={updateTaskList} />
      <MemosForm task={task} updateTaskList={updateTaskList} />
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
