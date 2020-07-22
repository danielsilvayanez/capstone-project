import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MemoList from './MemoList'

const testTask = {
  taskId: '1',
  call_number: 'Call-Number1',
  driver: 'Will',
  start: '',
  arrival: '',
  done: '',
  memos: ['memo1', 'memo2'],
}

beforeEach(() => {
  render(<MemoList task={testTask} />)
})

describe('TaskListItem.js test', () => {
  screen.debug()
  it('Should find memos from json object', () => {
    expect(screen.getByText('memo1' && 'memo2'))
  })
})
