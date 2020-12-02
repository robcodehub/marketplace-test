/// <reference types="cypress" />

context('New Listings', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.wait(1000);
  });

  describe('Home Page Contains New Listings Menu Item', () => {
    it('Checks home page contains New listings Menu Item', () => {
      cy.get('#navbar').contains('New Listings');
    });
  });

  describe('Clicking New Listings navigates to new listings', () => {
    it('Checks home page contains listings', () => {
      cy.get('#navbar').contains('New Listings').click();

      cy.url().should('include', '/newlistings');
    });
  });

  describe('Listing Header Displayed', () => {
    it('Checks home page contains listings', () => {
      cy.get('#navbar').contains('New Listings').click();

      cy.url().should('include', '/newlistings');

      cy.get('#new-listings-header').contains('New Listings Published');

      cy.get('#all-listings').contains('For Sale');
    });
  });
});
