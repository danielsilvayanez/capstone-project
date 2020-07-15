import React from 'react'
import TaskButton from './TaskButton'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

beforeEach(() => {
  render(<TaskButton callNumber={'Call-Number'} />)
})

//@to-do - onClick={mockCallBack}

describe('TaskButton.js test', () => {
  it('displays Button with task number', () => {
    expect(screen.getByRole('button'))
  })
  it('Button should render a text', () => {
    expect(screen.getByText('Call-Number')).toBeInTheDocument()
  })
  /*it('Button should be clickable', (mockCallBack) => {
    const mockCallBack = jest.fn()
    fireEvent.click(screen.getByRole('button'))
    expect(mockCallBack).toHaveBeenCalledTimes(1)
  })*/
})
