import React from 'react'
import TaskListItem from './TaskListItem'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import { addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'TaskListItem',
  component: TaskListItem,
}

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export const ToStorybook = () => (
  <>
    <StyledButton onClick={action('Clicked!!')}>{'Call-NumberX'}</StyledButton>
    <TaskListItem />
  </>
)

ToStorybook.story = {
  name: 'TaskListItem',
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
