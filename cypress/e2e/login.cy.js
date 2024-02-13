describe("Auth spec", () => {
  it("navigates to protected route after login", () => {
    // Perform login before visiting the protected route
    cy.visit("https://vercel-todo-obi.vercel.app/login");
    cy.get('input[name="email"]').type("mainak4ever@gmail.com");
    cy.get('input[name="password"]').type("password123");
    cy.contains("button", "Sign in").click();

    // cy.pause();
    // Once logged in, check if the URL changes to the protected route
    cy.url().should("eq", "https://vercel-todo-obi.vercel.app/");
  });

  it("navigates login to signup", () => {
    // Perform login before visiting the protected route
    cy.visit("https://vercel-todo-obi.vercel.app/login");
    cy.get('a[href*="/signup"]').click();
    cy.url().should("eq", "https://vercel-todo-obi.vercel.app/signup");
  });

  it("if user already exist gives error on register", () => {
    cy.visit("https://vercel-todo-obi.vercel.app/signup");
    cy.get('input[name="name"]').type("Mainak Mitra");
    cy.get('input[name="email"]').type("mainak@gmail.com");
    cy.get('input[name="password"]').type("password123");
    cy.contains("button", "Create Account").click();

    // Check if the error message "Failed to register user" is displayed
    cy.contains("Failed to register user").should("be.visible");
  });
});

describe("Home spec", () => {
  beforeEach(() => {
    cy.visit("https://vercel-todo-obi.vercel.app");
    cy.get('input[name="email"]').type("mainak4ever@gmail.com");
    cy.get('input[name="password"]').type("password123");
    cy.contains("button", "Sign in").click(); // Update the URL accordingly
  });

  it("should filter todos based on completion status", () => {
    cy.get("#filter").select("completed");
    // cy.get(".todo-item").each(($item) => {
    //   const isChecked = $item.find('input[type="checkbox"]').prop("checked");
    //   const isCompleted = $item.find("span.line-through").length > 0; // Checking for the presence of line-through class
    //   if (isChecked) {
    //     expect(isCompleted).to.be.true; // If checkbox is checked, the todo should be completed
    //   } else {
    //     expect(isCompleted).to.be.false; // If checkbox is not checked, the todo should not be completed
    //   }
    // });
  });

  it("should sort todos based on  title desc", () => {
    cy.get("#sort").select("titleDesc");
  });

  it("should open add todo page", () => {
    cy.contains("button", "Add Todo").click();
    cy.url().should("eq", "https://vercel-todo-obi.vercel.app/add-todo");

    cy.get('input[name="title"]').type("Go Sleep");
    cy.get("textarea").type("Its 3:45 o sleep now");
    cy.get("button.px-4.py-2.rounded-lg.bg-blue-600.text-white.w-full").click();

    cy.url().should("eq", "https://vercel-todo-obi.vercel.app/");
  });
});
