/// <reference types="cypress" />
// @ts-ignore
Cypress.Commands.add('login', () => {
    cy.visit('/login');
    cy.get('input#email').type(Cypress.env('email'), { log: false });
    cy.get('input#password').type(Cypress.env('password'), { log: false });
    cy.get('button[type="submit"]').click();
});