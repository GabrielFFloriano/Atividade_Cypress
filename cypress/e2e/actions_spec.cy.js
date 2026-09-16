describe('Cypress Example - Actions', () => {
  it('preenche e-mail e marca uma caixa de seleção', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    const email = 'teste@example.com'
    cy.get('.action-email').type(email).should('have.value', email)

    // Seleciona a primeira checkbox disponível na página
    cy.get('.action-checkboxes input[type="checkbox"]').not('[disabled]').first().check().should('be.checked')
  })
})
