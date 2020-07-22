import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TaskPageDetailsTimetable from './TaskPageDetailsTimetable'
import dayjs from 'dayjs'

const testTask = {
  taskId: '1',
  call_number: 'Call-Number1',
  driver: 'Will',
  start: '',
  arrival: '',
  done: '',
  memos: [],
}

const timestamp = dayjs().format('HH:mm')

const updateTaskList = jest.fn()

beforeEach(() => {
  render(
    <TaskPageDetailsTimetable task={testTask} updateTaskList={updateTaskList} />
  )
})

describe('TaskListItem.js test', () => {
  it('Should initialize 3 buttons and 3 divs', () => {
    expect(screen.getAllByTestId('button-test-start').length).toBe(1)
    expect(screen.getAllByTestId('button-test-arrival').length).toBe(1)
    expect(screen.getAllByTestId('button-test-done').length).toBe(1)
    expect(screen.getAllByTestId('div-test-start').length).toBe(1)
    expect(screen.getAllByTestId('div-test-arrival').length).toBe(1)
    expect(screen.getAllByTestId('div-test-done').length).toBe(1)
    expect(screen.getByText('Start' && 'Ankunft' && 'Erledigt'))
  })
  it('Should display timestamp after click on eadch button', () => {
    fireEvent.click(screen.getByTestId('button-test-start'))
    expect(screen.getByTestId('div-test-start').textContent).toBe(timestamp)
    fireEvent.click(screen.getByTestId('button-test-arrival'))
    expect(screen.getByTestId('div-test-arrival').textContent).toBe(timestamp)
    fireEvent.click(screen.getByTestId('button-test-done'))
    expect(screen.getByTestId('div-test-done').textContent).toBe(timestamp)
    screen.debug()
  })
})
