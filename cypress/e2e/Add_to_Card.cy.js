
// npx mochawesome-merge cypress/results/mochawesome/*.json -o ./cypress/results/mochawesome/output.json
// npx marge ./cypress/results/mochawesome/output.json

/// <reference types="Cypress" />

describe('Product Page - Verify Add to Cart Functionality', () => {
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => { return false })
    })
    beforeEach(() => {
        cy.visit('/');
    })
    it('Add to Cart Button 1', () => {
        cy.get('div.actions > form > button')
            .should('have.attr', 'type', 'submit')
            .eq(0)
            .scrollIntoView()
    });
    it('Add to Cart Button 2', () => {
        cy.get('div.actions > form > button')
            .should('have.attr', 'type', 'submit')
            .eq(1)
            .scrollIntoView()
    });
});