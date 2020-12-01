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
      cy.contains('New Listings');
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
      cy.contains('New Listings').click();
      cy.url().should('include', '/newlistings');
      cy.wait(2000);
      cy.contains('Marketplace').click();
      cy.url().should('not.include', '/newlistings');
      cy.contains('New Listings').click();
      cy.contains('Marketplace').click();
      cy.contains('Loading').should('not.exist');
    });
  });
});

context('New Listings', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.wait(1000);
  });

  describe('Home Page Contains New Listings Menu Item', () => {
    it('Checks home page contains New listings Menu Item', () => {
      cy.contains('New Listings');
    });
  });

  describe('Clicking New Listings navigates to new listings', () => {
    it('Checks home page contains listings', () => {
      cy.contains('New Listings').click();

      cy.url().should('include', '/newlistings');
    });
  });

  describe('Listing Header Displayed', () => {
    it('Checks home page contains listings', () => {
      cy.contains('New Listings').click();

      cy.url().should('include', '/newlistings');

      cy.contains('New Listings Published');

      cy.contains('For Sale');
    });
  });
});

context('Sort Listings', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    // Waiting to avoid API rate limits
    cy.wait(2000);
  });

  describe('User can sort by List Price', () => {
    it('Checks if listings can be sorted by price', () => {
      cy.contains('Price').click();
      cy.contains('Sorting');
    });
  });

  describe('User can sort by Multiple', () => {
    it('Checks if listings can be sorted by multiple', () => {
      cy.contains('Multiple').click();
      cy.contains('Sorting');
    });
  });

  describe('User can sort by Niche', () => {
    it('Checks if listings can be sorted by niche', () => {
      cy.contains('Niche').click();
      cy.contains('Sorting');
    });
  });

  describe('User can sort by Monetization', () => {
    it('Checks if listings can be sorted by monetization', () => {
      cy.contains('Monetization').click();
      cy.contains('Sorting');
    });
  });

  describe('Sorted data served from cache instead of server', () => {
    it('Checks monetization data served after second sort', () => {
      cy.contains('Monetization').click();
      cy.contains('Sorting');
      cy.wait(2500);
      cy.contains('Monetization').click();
      cy.contains('Sorting');
      cy.wait(2500);
      cy.contains('Monetization').click();
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

context('Screenshots', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('Take a screenshot after 2 seconds for a visual check', () => {
    it('takes a screenshot of home page after 2 seconds', () => {
      cy.wait(2000);
      cy.screenshot('home-2sec-screenshot');
    });
  });

  describe('Take a screenshot of new listings page for a visual check', () => {
    it('takes a screenshot of the new listings page after 2 seconds', () => {
      cy.wait(2000);
      cy.contains('New Listings').click();
      cy.url().should('include', '/newlistings');
      cy.screenshot('newlistings-2sec-screenshot');
    });
  });
});
