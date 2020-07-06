import React from 'react'
import styled from 'styled-components'
import tasks from './tasks.json'

export default function TaskListItem() {
  return (
    <StyledSection>
      {tasks.map((task) => (
        <button key={task.call_number}>{task.call_number}</button>
      ))}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  button {
    margin-top: 10px;
    color: hotpink;
    width: 90%;
    height: 80px;
    border-radius: 9px;
    background-color: #464646;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
  }
`
