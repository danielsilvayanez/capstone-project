import React, { useState } from 'react'
import MemoList from './MemoList'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import { addDecorator } from '@storybook/react'

export default {
  title: 'MemoList',
  component: MemoList,
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
  name: 'MemoList',
}
