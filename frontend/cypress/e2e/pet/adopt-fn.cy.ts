describe("Test Adopt & Un Adopt Functions / Buttons", () => {

    const PET_PAGE_LINK = `/pets/${Cypress.env("petId")}`;

    beforeEach("login", () => {
        cy.login();
    })

    it('adopt a pet', () => {
        cy.visit(PET_PAGE_LINK);
        cy.get("button.adopt-btn").should('have.text', "Adopt");
        cy.get("button.adopt-btn").click();
        cy.get("button.adopt-btn").should('have.attr', "disabled");
        cy.get("button.un-adopt-btn").should('have.text', "Un Adopt Pet");

        // un adopt the pet - clean up the adoption process
        cy.get("button.un-adopt-btn").click()
        cy.get("button.un-adopt-alert-btn").click()
    });

})