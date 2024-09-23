/// <reference types="cypress" />
Cypress.Commands.add('login', () => {
    cy.visit('/login');
    cy.get('input#email').type(Cypress.env('email'), {log: false});
    cy.get('input#password').type(Cypress.env('password'), {log: false});
    cy.get('button[type="submit"]').click();
    cy.title().should('eq', 'PetStore');
    cy.url().should('eq', Cypress.config('baseUrl') + '/');
});

Cypress.Commands.add('logout', () => {
    cy.get("button.profile-btn.drawer-btn").should('have.text', 'Profile').click();
    cy.get('button.logout-btn').click();
    cy.get("a.login-btn").should('have.text', 'Login');
});

Cypress.Commands.add('visitAndCheckRedirect', (link: string, redirectPath: string) => {
    cy.visit(link);
    cy.url().should('include', redirectPath);
});


declare global {
    namespace Cypress {
        interface Chainable {
            visitAndCheckRedirect(link: string, redirectPath: string): void;

            login(): void;

            logout(): void;
        }
    }
}

export {}; // This empty export is necessary to make this a module