import React from 'react'
import TaskList from '../components/TaskList'

export default function Dashboard({ tasks }) {
  return (
    <>
      <TaskList tasks={tasks} />
    </>
  )
}
