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
      cy.get('#navbar').contains('New Listings').click();
      cy.url().should('include', '/newlistings');
      cy.screenshot('newlistings-2sec-screenshot');
    });
  });
});
