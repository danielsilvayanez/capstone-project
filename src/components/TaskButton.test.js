import React from 'react'
import TaskButton from './TaskButton'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('TaskButton', () => {
  const mockCallback = jest.fn()
  beforeEach(() => {
    render(<TaskButton callNumber={'Call-Number'} onClick={mockCallback} />)
  })
  it('shows a task number', () => {
    expect(screen.getByRole('button'))
  })
  it('renders a text', () => {
    expect(screen.getByText('Call-Number')).toBeInTheDocument()
  })
  it('works with callback', () => {
    fireEvent.click(screen.getByRole('button'))
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})
