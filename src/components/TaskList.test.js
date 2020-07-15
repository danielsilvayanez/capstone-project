import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import TaskList from './TaskList'
import { NavLink } from 'react-router-dom'

beforeEach(() => {
  render(
    <NavLink>
      <TaskList />
    </NavLink>
  )
})

describe('TaskList.js test', () => {
  it('should render expected length of Call-Numbers', () => {
    expect(screen.getAllByTestId('call_number')).toBe(5)
  })
})
