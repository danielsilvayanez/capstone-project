import React from 'react'
import Header from './Header'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import dayjs from 'dayjs'

const currentDate = dayjs().format('DD.MM.YYYY')

describe('Header test', () => {
  it('H1 displays current date', () => {
    const { queryByText } = render(<Header />)
    expect(queryByText(currentDate).tagName).toBe('H1')
  })

  it('H2 displays test and drivers name', () => {
    const { queryByText } = render(<Header />)
    expect(queryByText(currentDate).tagName).toBe('H1')
    expect(queryByText('Hallo,').tagName).toBe('H2')
  })
})
