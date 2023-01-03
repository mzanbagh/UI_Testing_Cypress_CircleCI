
/// <reference types="Cypress" />

describe('Product Page - URL & Title Verification', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })
  })
  beforeEach(() => {
    cy.visit('/');
  })

  it('URL to Contain jet *env-value', () => {
    cy.url()
      .should('contain', Cypress.env('name'))
    // {decode:true}).should('contain','3D')
  });
  it('Page Sub Title 3D Model details', () => {
    cy.get('.model-details > .heading-20')
      .scrollIntoView()
      .should('include.text', '3D Model details')
  })
  // UNDER CONST
  it('UNDER CONST', () => {

  });
});