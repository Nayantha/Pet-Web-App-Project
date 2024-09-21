/// <reference types="cypress" />
describe("Login", () => {
    beforeEach("Login Before", () => {
        // @ts-ignore
        cy.login();
    });
    it('redirect to home page', () => {
        cy.title().should('eq', 'PetStore');
        cy.url().should('eq', Cypress.config('baseUrl') + '/');
    });
    it("Profile data is not empty", () => {
        cy.get("button.profile-btn.drawer-btn").should('have.text', 'Profile').click();
        cy.get("img.user-profile-pic")
            .should('have.attr', 'src').and('not.be.empty');
        cy.get("img.user-profile-pic")
            .should('have.attr', 'alt').and('not.be.empty');
        cy.get(".user-email").invoke('text').should('not.be.empty').and('not.match', /^\s*$/);
        cy.get(".user-name").invoke('text').should('not.be.empty').and('not.match', /^\s*$/);
        cy.get(".username").invoke('text').should('not.be.empty').and('not.match', /^\s*$/);
    });
});