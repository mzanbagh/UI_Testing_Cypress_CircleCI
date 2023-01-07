
/// <reference types="Cypress" />
describe('Product Page - Share Button Alive & Functional', () => {
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => { return false })
    })
    beforeEach(() => {
        cy.visit('/');
    })
    it('Share Button Click-on', () => {
        cy.get(Cypress.env('share_button'))
            .scrollIntoView()
            .click()
            .then(() => {
                cy.get('.form-inline > .form-control')
                .should('have.attr', 'value')
            });  
    });
    it('Share Button Existence', () => {
        cy.get(Cypress.env('share_button'))
        .scrollIntoView()
            .should('have.attr', 'data-class')
    });
});