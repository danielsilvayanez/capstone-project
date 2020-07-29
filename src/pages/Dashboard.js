import React from 'react'
import TaskList from '../components/TaskList'
import styled from 'styled-components'
import Login from '../components/auth/Login'

export default function Dashboard({ tasks, user }) {
  console.log(user)
  return (
    <section>
      {user ? (
        <>
          <TaskList tasks={tasks} />
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
