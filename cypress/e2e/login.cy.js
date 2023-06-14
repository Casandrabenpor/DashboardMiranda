describe('login', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/')
  })

  it('redirect to login', () => {
    cy.url().should('include', '/login')
  })

  it('successful login', () => {

    cy.get('input[name=name]').type('casandra');
    cy.get('input[name=email]').type('casandra@gmail.com');
    cy.get('input[name=password]').type('test{enter}');


    cy.location().should((loc) => {
      expect('/').to.eq(loc.pathname);
    });
  })

  it('not successful login', () => {

    cy.get('input[name=name]').type('false');
    cy.get('input[name=email]').type('false');
    cy.get('input[name=password]').type('false{enter}');

    cy.url().should('include', '/login');
  })
})