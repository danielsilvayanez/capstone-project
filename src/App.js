import React from 'react'
import Header from './components/Header'
import TaskListItem from './components/TaskListItem'

function App() {
  const driver = 'Will Smith'

  return (
    <>
      <Header name={driver} />
      <TaskListItem />
    </>
  )
}

export default App
