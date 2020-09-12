import React from 'react'
import TaskList from '../components/TaskList/TaskList'
import Login from '../components/auth/Login'

export default function Dashboard({ tasks, user, currentDate }) {
  return (
    <section>
      {user ? (
        <>
          <TaskList tasks={tasks} currentDate={currentDate} />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </section>
  )
}
