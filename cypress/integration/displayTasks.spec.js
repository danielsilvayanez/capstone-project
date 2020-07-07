describe('App Driver-Dashboard', () => {
  it('should display driver´s current tasks', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Call-Number')
  })
})
