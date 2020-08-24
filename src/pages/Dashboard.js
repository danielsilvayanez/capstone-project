import React from 'react'
import TaskList from '../components/TaskList/TaskList'
import styled from 'styled-components'
import Login from '../components/auth/Login'

export default function Dashboard({ tasks, user, currentDate }) {
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
