
/// <reference types="Cypress" />

describe('Product Page - Verify Price Format & Alive ', () => {
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => { return false })
    })
    beforeEach(() => {
        cy.visit('/');
    })
    it('Final Price Available in Correct Format', () => {
        cy.get(Cypress.env('price_obj'))
            .scrollIntoView()
            .last().should('have.text', Cypress.env('price'))
            .should('have.attr', 'content')
    });
    it('Final Price does have proper CSS', () => {
        cy.get(Cypress.env('price_obj'))
        .first().should('have.attr', 'itemprop', 'price')        
    });
});