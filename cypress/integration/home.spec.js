/// <reference types="cypress"/>

context("Testing home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should have 5 buttons on nav", () => {
    cy.get("button").should("have.length", 5);
  });
  it("should scroll from top and div is animated", () => {
    const waiting = 1000;
    cy.wait(waiting);
    cy.window()
      .scrollTo("top", 10)
      .then(() => {
        cy.get('[data-testid="scrollDiv"]').should("have.class", "-z-10");
      });
  });

  it("should scroll back and div should be the same as initial", () => {
    cy.window()
      .scrollTo("bottom", 10)
      .then(() => {
        cy.get('[data-testid="scrollDiv"]').should("have.class", "z-0");
      });
  });

  it("takes a screenshot", () => {
    // screenshot will be saved as
    // cypress/screenshots/users.spec.js/my tests -- takes a screenshot.png
    cy.screenshot({ overwrite: true });
  });
});
