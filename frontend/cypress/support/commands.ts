/// <reference types="cypress" />
// @ts-ignore
Cypress.Commands.add('login', () => {
    cy.visit('/login');
    cy.get('input#email').type(Cypress.env('email'), { log: false });
    cy.get('input#password').type(Cypress.env('password'), { log: false });
    cy.get('button[type="submit"]').click();
    cy.title().should('eq', 'PetStore');
    cy.url().should('eq', Cypress.config('baseUrl') + '/');
});

// @ts-ignore
Cypress.Commands.add('logout', () => {
    cy.get("button.profile-btn.drawer-btn").should('have.text', 'Profile').click();
    cy.get('button.logout-btn').click();
    cy.get("a.login-btn").should('have.text', 'Login');
});

// @ts-ignore
Cypress.Commands.add('visitAndCheckRedirect', (link: string, redirectPath: string) => {
    cy.visit(link);
    cy.url().should('include', redirectPath);
});