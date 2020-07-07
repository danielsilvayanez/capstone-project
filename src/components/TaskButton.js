import React from 'react'
import styled from 'styled-components'

export default function TaskButton({ callNumber, onClick }) {
  return <StyledButton onClick={onClick}>{callNumber}</StyledButton>
}

const StyledButton = styled.button`
  margin-top: 10px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  background-color: var(--primary-white);
  font-size: 36px;
  font-weight: bold;
  letter-spacing: normal;
  color: var(--primary-grey-mid);
  box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.38);
  width: 100%;

  :hover {
    background-color: var(--primary-grey-mid);
    color: var(--primary-white);
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  }
`
