import React from 'react'
import GlobalStyles from './GlobalStyles'
import { addDecorator } from '@storybook/react'
import styled from 'styled-components'
import TaskList from './TaskList'
import { action } from '@storybook/addon-actions'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

export default {
  title: 'TaskList',
  component: TaskList,
}

export const withExampleData = () => (
  <StyledSection>
    <StyledButton
      key={'1'}
      onClick={action('Click opens new Page with individual Call-Number')}
    >
      {'Call-Number 1'}
    </StyledButton>
    <StyledButton
      key={'2'}
      onClick={action('Click opens new Page with individual Call-Number')}
    >
      {'Call-Number 2'}
    </StyledButton>
    <StyledButton
      key={'3'}
      onClick={action('Click opens new Page with individual Call-Number')}
    >
      {'Call-Number 3'}
    </StyledButton>
    <StyledButton
      key={'4'}
      onClick={action('Click opens new Page with individual Call-Number')}
    >
      {'Call-Number 4'}
    </StyledButton>
    <StyledButton
      key={'5'}
      onClick={action('Click opens new Page with individual Call-Number')}
    >
      {'Call-Number 5'}
    </StyledButton>
  </StyledSection>
)

const StyledSection = styled.section`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

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
