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

Cypress.Commands.add("adoptPet", (pet_page_link: string) => {
    cy.visit(pet_page_link);

    cy.get("button.adopt-btn").should('have.text', "Adopt");
    cy.get("button.adopt-btn").should('not.have.attr', "disabled");

    cy.get("button.adopt-btn").click();

    cy.get("button.adopt-btn").should('have.attr', "disabled");
    cy.get("button.un-adopt-btn").should('have.text', "Un Adopt Pet");
})

Cypress.Commands.add("unAdoptPet", (pet_page_link: string) => {
    cy.visit(pet_page_link);

    cy.get("button.un-adopt-btn").click();
    cy.get("button.un-adopt-alert-btn").click();

    cy.get("button.adopt-btn").should('have.text', "Adopt");
    cy.get("button.adopt-btn").should('not.have.attr', "disabled");
})

declare global {
    namespace Cypress {
        interface Chainable {
            visitAndCheckRedirect(link: string, redirectPath: string): void;

            login(): void;

            logout(): void;

            adoptPet(pet_page_link: string): void;

            unAdoptPet(pet_page_link: string): void;
        }
    }
}

export {}; // This empty export is necessary to make this a module