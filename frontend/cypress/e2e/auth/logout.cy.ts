/// <reference types="cypress" />
describe("Logout", () => {
    beforeEach("Login", () => {
        // @ts-ignore
        cy.login();
    });
    it("Logout", () => {
        // @ts-ignore
        cy.logout();
    });
});