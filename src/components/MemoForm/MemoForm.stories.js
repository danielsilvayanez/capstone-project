import React, { useState } from 'react'
import MemoList from '../MemoList/MemoList'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'
import MemoForm from './MemoForm'

export default {
  title: 'MemoForm',
  component: MemoForm,
}

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

const testTask = {
  taskId: '1',
  call_number: 'Call-Number1',
  driver: 'Will',
  start: '',
  arrival: '',
  done: '',
  memos: ['cpu ausgetausch', 'motherboard gewechselt', 'Neustart'],
}

export const ToStorybook = () => {
  return (
    <>
      <MemoList task={testTask} />
    </>
  )
}

ToStorybook.story = {
  name: 'MemoForm',
}
