import React from 'react'
import { render, screen, getAllByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TaskListItem from './TaskListItem'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'

beforeEach(() => {
  render(<TaskListItem />)
})

describe('TaskListItem.js test', () => {
  let timeStamp = dayjs().format('HH:mm')
  it('Should initialize 3 buttons and 3 divs', () => {
    expect(screen.getAllByTestId('button-test').length).toBe(3)
    expect(screen.getAllByTestId('div-test').length).toBe(3)
    expect(screen.getByText('Start' && 'Ankunft' && 'Erledigt'))
  })
  it('Should click on 3 buttons and check for timestamp', () => {
    userEvent.click(screen.getByText('Start'))
    expect(screen.getAllByTestId('div-test')[0].textContent).toBe(timeStamp)
    userEvent.click(screen.getByText('Ankunft'))
    expect(screen.getAllByTestId('div-test')[1].textContent).toBe(timeStamp)
    userEvent.click(screen.getByText('Erledigt'))
    expect(screen.getAllByTestId('div-test')[2].textContent).toBe(timeStamp)
  })
})
