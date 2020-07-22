import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function MemoList({ task }) {
  return (
    <StyledSection>
      <p>Notizen</p>
      <ul>
        {task &&
          task.memos.map((memo, index) => (
            <StyledLi key={index}>{memo}</StyledLi>
          ))}
      </ul>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 10px;
  padding: 10px;
`
const StyledLi = styled.li`
  word-wrap: break-word;
  width: 10%px;
`
