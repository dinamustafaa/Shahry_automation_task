import LoginPage from "../pages/Login";
import ProductsPage from "../pages/Products";
import users from "../fixtures/users.json";

describe("Login Test", () => {
  it("should login successfully", () => {
    LoginPage.makeLogin(users.successUserName);
    // Expect to see Products Title
    cy.contains(ProductsPage.PRODUCTS_PAGE_TITLE).should("exist");
  });

  it("should show an error message for blocked used", () => {
    LoginPage.makeLogin(users.lockedOutUserName);
    // Expect to see an error message
    cy.contains(LoginPage.ERROR_MESSAGE_FOR_LOCKED_USER_TEXT).should("exist");
  });

  it("should login successfully using problem user", () => {
    LoginPage.makeLogin(users.problemUserName);
    // Expect to see Products Title
    cy.contains(ProductsPage.PRODUCTS_PAGE_TITLE).should("exist");
  });

  it("should login successfully using performance glitch user", () => {
    LoginPage.makeLogin(users.performanceGlitchUserName);
    // Expect to see Products Title
    cy.contains(ProductsPage.PRODUCTS_PAGE_TITLE).should("exist");
  });

  it("should login successfully using error user", () => {
    LoginPage.makeLogin(users.errorUserName);
    // Expect to see Products Title
    cy.contains(ProductsPage.PRODUCTS_PAGE_TITLE).should("exist");
  });

  it("should login successfully using visual user", () => {
    LoginPage.makeLogin(users.visualUserName);
    // Expect to see Products Title
    cy.contains(ProductsPage.PRODUCTS_PAGE_TITLE).should("exist");
  });
});
