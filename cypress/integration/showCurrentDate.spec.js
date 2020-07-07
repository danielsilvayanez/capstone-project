let currentDate = new Date()
const day = String(currentDate.getDate()).padStart(2, '0')
const month = String(currentDate.getMonth() + 1).padStart(2, '0')
const year = currentDate.getFullYear()

currentDate = month + '.' + day + '.' + year
describe('Current Date', () => {
  it('should display current date in Header', () => {
    cy.visit('http://localhost:3000/')
    cy.contains(currentDate)
  })
})
