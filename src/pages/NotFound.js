import React from 'react'
import styled from 'styled-components'

export default function NotFound() {
  return <StyledNotFound>404 not found Bro, sorry!</StyledNotFound>
}

const StyledNotFound = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
`
