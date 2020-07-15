import React from 'react'
import Header from './Header'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import dayjs from 'dayjs'

const currentDate = dayjs().format('DD.MM.YYYY')

beforeEach(() => {
  render(<Header />)
})

describe('Header.js test', () => {
  it('H1 displays current date', () => {
    expect(screen.queryByText(currentDate).tagName).toBe('H1')
  })

  it('H2 displays test and drivers name', () => {
    expect(screen.queryByText('Hallo,').tagName).toBe('H2')
  })
})
