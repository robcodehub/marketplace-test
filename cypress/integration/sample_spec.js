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
