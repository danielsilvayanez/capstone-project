import React from 'react'
import GlobalStyles from './GlobalStyles'
import { addDecorator } from '@storybook/react'
import TaskPageDetailsTimetable from './TaskPageDetailsTimetable'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

export default {
  title: 'TaskPageDetailsTimetable',
  component: TaskPageDetailsTimetable,
}

const testTask = {
  taskId: '1',
  call_number: 'Call-Number1',
  driver: 'Will',
  start: '',
  arrival: '',
  done: '',
  memos: [],
}

export const ToStorybook = () => {
  return (
    <>
      <TaskPageDetailsTimetable task={testTask} />
    </>
  )
}

ToStorybook.story = {
  name: 'TaskPageDetailsTimetable',
}
