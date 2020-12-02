/// <reference types="cypress" />

context('User Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(1000);
    cy.get('#navbar').contains('New Listings').click();
    cy.get('#navbar').contains('Marketplace').click();
  });

  it('checks user can navigate between pages in their browser', () => {
    cy.location('pathname').should('not.include', 'newlistings');

    cy.go('back');
    cy.location('pathname').should('include', 'newlistings');
    cy.get('#all-listings').contains('For Sale');

    cy.go('forward');
    cy.location('pathname').should('not.include', 'newlistings');
  });
});
