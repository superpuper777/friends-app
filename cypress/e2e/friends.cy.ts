describe("Friends Page", () => {
  it("should render friends list when data is fetched successfully", () => {
    const apiUrl = Cypress.env("apiUrl");

    cy.intercept("GET", `${apiUrl}/friends`, {
      statusCode: 200,
      body: [
        {
          id: 1,
          img: "https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg",
          first_name: "Jeremy",
          last_name: "Davis",
          status: "At work...",
          available: false,
        },
        {
          id: 2,
          img: "https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg",
          first_name: "Vlad",
          last_name: "Baratovich",
          status: "Hangout out by the pool",
          available: true,
        },
      ],
    });

    cy.visit("/friends");
    cy.wait(2000);

    cy.contains("Friends");
    cy.contains("Jeremy Davis");
    cy.contains("Vlad Baratovich");
  });
});
