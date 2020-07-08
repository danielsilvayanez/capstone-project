import dayjs from 'dayjs'

const currentDate = dayjs().format('DD.MM.YYYY')

describe('Current Date', () => {
  it('should display current date in Header', () => {
    cy.visit('http://localhost:3000/')
    cy.contains(currentDate)
  })
})
