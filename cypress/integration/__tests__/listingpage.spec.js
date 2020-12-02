/// <reference types="cypress" />

context('Individual Listing Page tests', () => {
  describe('User can access individual listing page directly from URL', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/listing/49862');
    });

    it('Checks the top listing header is displayed with listing number', () => {
      cy.get('#listing-top-info > h1');
      cy.get('#listing-top-info > h2');
      cy.get('#listing-top-info > h3');
      cy.get('#listing-top-info > h3').contains('49862');
    });

    it('Checks unlock listing section and buttons are displayed', () => {
      cy.get('#unlock-listing').contains('Buy Now');
      cy.get('#unlock-listing').contains('Unlock Listing');
    });

    it('Checks listing summary is displayed', () => {
      cy.get('#listing-summary').contains('Listing Summary');
    });
  });

  describe('User can navigate to listing page from home page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
      cy.get('#all-listings > :nth-child(5)').contains('For Sale').click();
    });

    it('Checks the top listing header is displayed', () => {
      cy.get('#listing-top-info > h1');
      cy.get('#listing-top-info > h2');
      cy.get('#listing-top-info > h3');
    });

    it('Checks unlock listing section and buttons are displayed', () => {
      cy.get('#unlock-listing').contains('Buy Now');
      cy.get('#unlock-listing').contains('Unlock Listing');
    });

    it('Checks listing summary is displayed', () => {
      cy.get('#listing-summary').contains('Listing Summary');
    });
  });

  describe('User can navigate to listing page from new listings', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
      cy.get('#navbar').contains('New Listings').click();
      cy.get('#all-listings > :nth-child(3)').contains('For Sale').click();
    });

    it('Checks the top listing header is displayed', () => {
      cy.get('#listing-top-info > h1');
      cy.get('#listing-top-info > h2');
      cy.get('#listing-top-info > h3');
    });

    it('Checks unlock listing section and buttons are displayed', () => {
      cy.get('#unlock-listing').contains('Buy Now');
      cy.get('#unlock-listing').contains('Unlock Listing');
    });

    it('Checks listing summary is displayed', () => {
      cy.get('#listing-summary').contains('Listing Summary');
    });
  });
});
