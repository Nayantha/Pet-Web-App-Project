describe("Test Adopt & Un Adopt Functions / Buttons", () => {

    const PET_PAGE_LINK = `/pets/${Cypress.env("petId")}`;

    beforeEach("login", () => {
        cy.login();
    })

    it('adopt a pet', () => {
        cy.adoptPet(PET_PAGE_LINK);
    });

    it('un adopt a pet', () => {
        cy.unAdoptPet(PET_PAGE_LINK);
    });

    it("adopt and un adopt", () => {
        cy.adoptPet(PET_PAGE_LINK);
        cy.unAdoptPet(PET_PAGE_LINK);
    });

})