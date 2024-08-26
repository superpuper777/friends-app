describe("Friend Page", () => {
  it("should display friend details when data is fetched successfully", () => {
    const apiUrl = Cypress.env("apiUrl");

    cy.intercept("GET", `${apiUrl}/friends/id`, {
      statusCode: 200,
      body: {
        id: 6,
        img: "https://img.freepik.com/premium-photo/front-view-american-cocker-spaniel-puppy-sitting-isolated-white_191971-16610.jpg?w=826",
        first_name: "Steph",
        last_name: "Walters",
        status: "Developing something amazing",
        available: true,
      },
    });

    cy.visit("/friends/1");

    cy.contains("Steph Walters");
    cy.get('img[alt="Profile Picture"]')
      .should("have.attr", "src")
      .and("include", "img.freepik.com");
    cy.contains("Developing something amazing");
  });
});
