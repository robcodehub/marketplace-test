/* eslint-disable */

describe('Check Tests Running Test', () => {
  it('Returns true to confirm tests are running correctly', () => {
    expect(true).to.equal(true);
  });
});

describe('Home Page Loaded Test', () => {
  it('Visits home page', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('Home Page Contains New Listings Menu Item', () => {
  it('Check home page contains listings', () => {
    cy.visit('http://localhost:3000');

    cy.contains('New Listings');
  });
});

describe('Clicking New Listings navigates to new listings', () => {
  it('Check home page contains listings', () => {
    cy.visit('http://localhost:3000');

    cy.contains('New Listings').click();

    cy.url().should('include', '/newlistings');
  });
});
