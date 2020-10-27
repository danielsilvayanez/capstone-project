import React from 'react'
import TaskList from '../components/TaskList/TaskList'
import styled from 'styled-components'
import Login from '../components/auth/Login'
import { fetchTasks } from '../services/getTaskFromFirestore'


fetchTasks().then((data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].auftragsnummer)
  let callNumber = []
  callNumber.push(data[i].auftragsnummer); 
  console.log(callNumber);
  return callNumber
}
 });

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
