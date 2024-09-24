describe('Pet List Page', () => {

    beforeEach("login", () => {
        cy.login();
    });

    it('pet grid component has data', () => {
        cy.visit("/pets")
        cy.get("div.pet-list .pet-list-item").should("have.length", 12);
        cy.get("div.pet-list .title").should("have.text", "Pets");
    });
})