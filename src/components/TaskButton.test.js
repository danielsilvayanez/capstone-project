import React from 'react'
import TaskButton from './TaskButton'
import { render, screen, getByRole } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('TaskButton test', () => {
  it('displays Button with task number', () => {
    const { queryByText, getByRole } = render(<TaskButton />)
    expect(getByRole('button'))
  })
})
