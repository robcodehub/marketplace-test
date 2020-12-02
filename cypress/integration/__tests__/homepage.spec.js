/* eslint-disable */
/// <reference types="cypress" />

describe('Check Tests Running Test', () => {
  it('Returns true to confirm no errors with test file ', () => {
    expect(true).to.equal(true);
  });
});

context('Loading Status', () => {
  describe('Home page should show loading listings on initial load', () => {
    it('Checks loading message on initial load', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Loading');
    });
  });
});

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    // waiting to avoid API rate limits
    cy.wait(1000);
  });

  describe('Title of the page should contain Empire Flippers', () => {
    it('Checks the page title', () => {
      cy.title().should('include', 'Empire Flippers');
    });
  });

  describe('Home Page Contains New Listings Menu Item', () => {
    it('Checks home page contains New listings Menu Item', () => {
      cy.get('#navbar').contains('New Listings');
    });
  });

  describe('Home page should not show loading after 3 seconds', () => {
    it('Should not contain loading message after 3 seconds', () => {
      // 1 second wait time already included in tests
      cy.wait(2000);
      cy.contains('Loading').should('not.exist');
    });
  });

  describe('Should not show loading message or reload listings again', () => {
    it('Should not contain loading message after initial load', () => {
      cy.get('#navbar').contains('New Listings').click();
      cy.url().should('include', '/newlistings');
      cy.wait(2000);
      cy.get('#navbar').contains('Marketplace').click();
      cy.url().should('not.include', '/newlistings');
      cy.get('#navbar').contains('New Listings').click();
      cy.get('#navbar').contains('Marketplace').click();
      cy.contains('Loading').should('not.exist');
    });
  });
});
