import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import tasks_mock from '../__mocks__/tasks_mock.json'
import TaskList from './TaskList'
import userEvent from '@testing-library/user-event'

const mockHistoryPush = jest.fn()
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

beforeEach(() => {
  render(<TaskList tasks={tasks_mock} />)
})

describe('TaskList', () => {
  it('should render 5 Call-Numbers', () => {
    expect(screen.getAllByText('Call-Number', { exact: false })).toHaveLength(
      tasks_mock.length
    )
  })
  it('should create the right Link for each TaskButton', () => {
    userEvent.click(screen.getByText('Call-Number1'))
    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
    expect(mockHistoryPush).toHaveBeenCalledWith(
      '/taskpagedetails/Call-Number1'
    )
  })
})
