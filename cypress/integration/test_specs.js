describe('Check Tests Running Test', () => {
  it('Returns true to confirm tests are running correctly', () => {
    expect(true).to.equal(true)
  })
})

describe('Home Page Loaded Test', () => {
  it('Visits home page', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Home Page Contains Listing 49103 Test', () => {
  it('Check home page contains 49130 test', () => {
    cy.visit('http://localhost:3000')

    cy.contains('#49103').click()
  })
})


describe("Contact Form test", () => {
  it("User can submit a message using the contact form", () => {
    cy.visit("http://localhost:3000");
    cy.get("contact");

    cy.get('input[name="name"]')
      .type("Rob")
      .should("have.value", "Rob");

    cy.get('input[name="email"]')
      .type("robw@empireflippers.com")
      .should("have.value", "robw@empireflippers.com");

    cy.get("textarea")
      .type("I want to sell my business. Can you contact me?")
      .should("have.value", "I want to sell my business. Can you contact me?");

    cy.get("form").submit();
  });
});


describe("Search box test", () => {
  it("User can search using the search box", () => {
    cy.visit("http://localhost:3000");
    cy.get("search");

    cy.get('input[name="search-box"]')
      .type("Amazon FBA")
      .should("have.value", "Amazon FBA");

    cy.get("search").submit();
  });
});


