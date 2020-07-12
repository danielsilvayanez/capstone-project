import React from 'react'
import TaskButton from './TaskButton'
import GlobalStyles from './GlobalStyles'
import { addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

storiesOf('Components/Header', module)

export default {
  title: 'TaskButton',
  component: TaskButton,
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
  </>
)
ToStorybook.story = {
  name: 'TaskButton',
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
