import React from 'react'
import TaskButton from './TaskButton'
import GlobalStyles from '../components/GlobalStyles'
import { action } from '@storybook/addon-actions'

export default {
  title: 'TaskButton',
  component: TaskButton,
}

export const Text = () => (
  <>
    <GlobalStyles />
    <TaskButton callNo="Call-No12345" onClick={action('clicked')} />
  </>
)
