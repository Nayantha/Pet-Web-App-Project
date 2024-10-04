describe("Test Adopt & Un Adopt Functions / Buttons", () => {

    const PET_PAGE_LINK = `/pets/${Cypress.env("petId")}`;

    beforeEach("login to site", () => {
        cy.login();
    })

    it('able to adopt a pet', () => {
        cy.adoptPet(PET_PAGE_LINK);
    });

    it('able to un adopt a pet', () => {
        cy.unAdoptPet(PET_PAGE_LINK);
    });

    it("able to adopt and then un adopt same pet", () => {
        cy.adoptPet(PET_PAGE_LINK);
        cy.unAdoptPet(PET_PAGE_LINK);
    });

    it("able to adopt and un adopt the same pet several times", () => {
        for (let i = 0; i < 5; i++) {
            cy.log("\n" + "iteration : " + i + "\n")
            cy.adoptPet(PET_PAGE_LINK);
            cy.unAdoptPet(PET_PAGE_LINK);
        }
    });

})