/// <reference types="cypress" />

context('API Enpoints / Routes', () => {
  beforeEach(() => {
    // Route requests are run for each test to split out tests
    // Wait time of 1 second before each tests to avoid API rate limits
    cy.wait(1000);
  });

  describe('New Listings endpoint checks', () => {
    it('Expects 200 status from new listings response', () => {
      cy.request('GET', 'http://localhost:5000/api/newlistings').then((response) => {
        expect(response).to.have.property('status', 200);
      });
    });

    it('Expects new listings response body to not be null', () => {
      cy.request('GET', 'http://localhost:5000/api/newlistings').then((response) => {
        expect(response.body).to.not.be.null;
      });
    });

    it('Expects new listings data to be an array with more than 2 listings', () => {
      cy.request('GET', 'http://localhost:5000/api/newlistings').then((response) => {
        expect(response.body.data.listings).length.to.be.greaterThan(2);
      });
    });
  });

  describe('All For Sale Listings endpoint checks', () => {
    it('Expects 200 status from all listings response', () => {
      cy.request('GET', 'http://localhost:5000/api/allsalelistings').then((response) => {
        expect(response).to.have.property('status', 200);
      });
    });

    it('Expects all listings response body to not be null', () => {
      cy.request('GET', 'http://localhost:5000/api/allsalelistings').then((response) => {
        expect(response.body).to.not.be.null;
      });
    });

    it('Expects all sales listings data to be an array with more than 50 listings', () => {
      cy.request('GET', 'http://localhost:5000/api/allsalelistings').then((response) => {
        expect(response.body.data.listings).length.to.be.greaterThan(50);
      });
    });
  });
});
