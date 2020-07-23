import React from 'react'
import styled from 'styled-components'

export default function MemoList({ task }) {
  return (
    <StyledSection>
      <p>Notizen</p>
      <ul>
        {task && task.memos.map((memo, index) => <li key={index}>{memo}</li>)}
      </ul>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid var(--primary-grey-mid);
  border-radius: 9px;
`
