
/// <reference types="Cypress" />

describe('Product Page - Image Existence', () => {
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => { return false })
    })
    beforeEach(() => {
        cy.visit('/');
    })
    it('Verify the main image is alive ', () => {
        cy.get('div.product-carousel__image > img')
        .scrollIntoView()
        .should('have.attr','src')
    });
    it('Verrify sub image alive & CSS height:75', () => {
        cy.get('ul > li:nth-child(1) > img')
        .scrollIntoView()
        .should('have.attr','height', '75')
    });
    it('Veify right arrow 1 of 2 svg on sub image section', () => {
        cy.get('.control-next > svg > path')
        .eq(0)
        .should('have.attr','fill','currentColor')
    });
    it('Veify right arrow 2 of 2 svg on sub image section', () => {
        cy.get('.control-next > svg > path')
        .eq(1)
        .should('have.attr','fill','currentColor')
    });
});