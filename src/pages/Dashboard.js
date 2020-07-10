import React from 'react'
import TaskList from '../components/TaskList'

export default function TaskPage(task) {
  return (
    <>
      <TaskList task={task} />
    </>
  )
}
