/// <reference types="cypress" />
describe("Pet Page", () => {

    const PET_PAGE_LINK = `/pets/${Cypress.env("petId")}`;

    it('redirects unauthenticated users to the register page', () => {
        cy.visitAndCheckRedirect(PET_PAGE_LINK, '/register');
    });

    it('allows authenticated users to access protected pages', () => {
        cy.login();
        cy.visitAndCheckRedirect(PET_PAGE_LINK, PET_PAGE_LINK);
    });

    it('pet component has data', () => {
        cy.login();
        cy.visit(PET_PAGE_LINK);

        // validate data
        cy.get("img.pet-avatar")
            .should('have.attr', 'src').and('not.be.empty');
        cy.get("img.pet-avatar")
            .should('have.attr', 'alt').and('not.be.empty');

        cy.get(".pet-name").invoke('text').should('not.be.empty').and('not.match', /^\s*$/);
        cy.get(".pet-intake-reason").invoke('text').should('not.be.empty').and('not.match', /^\s*$/);
        cy.get(".pet-breed").invoke('text').should('not.be.empty').and('not.match', /^\s*$/);
        cy.get(".pet-species").invoke('text').should('not.be.empty').and('not.match', /^\s*$/);
        cy.get(".pet-gender").invoke('text').should('not.be.empty').and('not.match', /^\s*$/);
        cy.get(".pet-base-color").invoke('text').should('not.be.empty').and('not.match', /^\s*$/);

    });
});