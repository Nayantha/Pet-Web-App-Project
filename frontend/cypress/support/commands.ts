/// <reference types="cypress" />
// @ts-ignore
Cypress.Commands.add('login', () => {
    cy.visit('/login');
    cy.get('input#email').type(Cypress.env('email'), { log: false });
    cy.get('input#password').type(Cypress.env('password'), { log: false });
    cy.get('button[type="submit"]').click();
});

// @ts-ignore
Cypress.Commands.add('logout', () => {
    cy.get("button.profile-btn.drawer-btn").should('have.text', 'Profile').click();
    cy.get('button.logout-btn').click();
    cy.get("a.login-btn").should('have.text', 'Login');
});