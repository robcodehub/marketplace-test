/// <reference types="cypress" />

context('Sort Listings', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    // Waiting to avoid API rate limits
    cy.wait(2000);
  });

  describe('User can sort by List Price', () => {
    it('Checks if listings can be sorted by price', () => {
      cy.get('#business-headings').contains('Price').click();
      cy.contains('Sorting');
    });
  });

  describe('User can sort by Multiple', () => {
    it('Checks if listings can be sorted by multiple', () => {
      cy.get('#business-headings').contains('Multiple').click();
      cy.contains('Sorting');
    });
  });

  describe('User can sort by Niche', () => {
    it('Checks if listings can be sorted by niche', () => {
      cy.get('#business-headings').contains('Niche').click();
      cy.contains('Sorting');
    });
  });

  describe('User can sort by Monetization', () => {
    it('Checks if listings can be sorted by monetization', () => {
      cy.get('#business-headings').contains('Monetization').click();
      cy.contains('Sorting');
    });
  });

  describe('Sorted data served from cache instead of server', () => {
    it('Checks monetization data served after second sort', () => {
      cy.get('#business-headings').contains('Monetization').click();
      cy.contains('Sorting');
      cy.wait(2500);
      cy.get('#business-headings').contains('Monetization').click();
      cy.contains('Sorting');
      cy.wait(2500);
      cy.get('#business-headings').contains('Monetization').click();
      cy.contains('Sorting').should('not.exist');
    });
  });

  describe('Cached data served after different sort types', () => {
    it('Checks cached data served after multiple sort types', () => {
      cy.contains('Monetization').click();
      cy.contains('Sorting');
      cy.wait(2500);
      cy.contains('Monetization').click();
      cy.contains('Sorting');
      cy.wait(2500);
      cy.contains('Price').click();
      cy.contains('Sorting');
      cy.wait(2500);
      cy.contains('Price').click();
      cy.contains('Sorting');
      cy.wait(2500);
      cy.contains('Monetization').click();
      cy.contains('Sorting').should('not.exist');
      cy.contains('Price').click();
      cy.contains('Sorting').should('not.exist');
    });
  });
});
