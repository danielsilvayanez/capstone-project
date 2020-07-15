import React from 'react'
import styled from 'styled-components'

export default function TaskButton({ callNumber }) {
  return (
    <>
      <StyledButton>{callNumber}</StyledButton>
    </>
  )
}

const StyledButton = styled.button`
  width: 90%;
  height: 80px;
  background-color: #464646;
  color: var(--primary-white);
  margin-top: 5px;
  font-size: 2em;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
`
