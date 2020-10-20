import React from 'react'
import TaskList from '../components/TaskList/TaskList'
import styled from 'styled-components'
import Login from '../components/auth/Login'
import { fetchTasks } from '../services/getTaskFromFirestore'
// import { taskRef } from '../firebase'

export default function Dashboard({ tasks, user, currentDate }) {
  console.log(fetchTasks())
  // let taskFromDB = fetchTasks()
  // setTimeout(() => {
  //   taskFromDB.forEach((data) => {
  //     console.log('dashboard' + data)
  //   })
  // }, 3000)

  return (
    <section>
      {user ? (
        <>
          <TaskList tasks={tasks} currentDate={currentDate} />
          <StyledH1>eingeloggt!</StyledH1>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </section>
  )
}

const StyledH1 = styled.h1`
  color: black;
`
