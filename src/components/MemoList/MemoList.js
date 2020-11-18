import React from 'react'
import styled from 'styled-components'

export default function MemoList({ task }) {
  return (
    <StyledSection>
      <p>Notizen</p>
      <ul>
        {task && task.notiz.map((memo, index) => <li key={index}>{memo}</li>)}
      </ul>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 5px;
  padding: 5px;
  width: 100%;
  border: 1px solid var(--primary-grey-mid);
  border-radius: 9px;
  box-shadow: -1px 5px 8px 0 rgba(0, 0, 0, 0.5);
  overflow: scroll;

  li {
    padding: 5px;
    font-size: 1em;
    word-wrap: break-word;
  }
`
