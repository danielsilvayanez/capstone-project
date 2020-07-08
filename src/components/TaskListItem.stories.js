import React from 'react'
import TaskListItem from './TaskListItem'
import GlobalStyles from './GlobalStyles'

export default {
  title: 'TaskListItem',
  component: TaskListItem,
}

export const ToStorybook = () => (
  <>
    <GlobalStyles />
    <TaskListItem />
  </>
)

ToStorybook.story = {
  name: 'TaskListItem',
}
