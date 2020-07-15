import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TaskListItem from './TaskListItem'
import dayjs from 'dayjs'

let timeStamp = dayjs().format('HH:mm')

beforeEach(() => {
  render(<TaskListItem />)
})

describe('TaskListItem.js test ', () => {
  it('Should initialize 3 buttons and 3 divs', () => {
    expect(screen.getAllByTestId('button-test').length).toBe(3)
    expect(screen.getAllByTestId('div-test').length).toBe(3)
  })
})
