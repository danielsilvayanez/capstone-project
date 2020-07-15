import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import TaskList from './TaskList'
import tasks_mock from '../components/__mocks__/tasks_mock.json'

beforeEach(() => {
  render(<TaskList tasks={tasks_mock} />)
})

describe('TaskList.js test', () => {
  it('should render expected length of 5 Call-Numbers', () => {
    expect(screen.getAllByTestId('call_number-test').length).toBe(
      tasks_mock.length
    )
  })
})
