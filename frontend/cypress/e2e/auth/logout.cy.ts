/// <reference types="cypress" />
describe("Logout", () => {
    beforeEach("Login", () => {
        cy.login();
    });
    it("Logout", () => {
        cy.logout();
    });
});