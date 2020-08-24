describe('testing dashboard', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should hide the values', () => {
    cy.get('#hide-values').click()
    cy.get('#sale-hide').should('not.contain', 'R$ 5.620.080,85')
    cy.get('#available-hide').should('not.contain', 'R$ 10.000.000,00')
    cy.get('#patrimony-hide').should('not.contain', 'R$ 10.000.000,00')
  })
})
