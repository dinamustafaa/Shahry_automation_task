import LoginPage from "../pages/Login";
import ProductsPage from "../pages/Products";
import CartPage from "../pages/Cart";
import users from "../fixtures/users.json";

describe("Cart Test", () => {
  it("should add item to the cart", () => {
    LoginPage.makeLogin(users.successUserName);
    cy.get(ProductsPage.ADD_TO_CART_BTN_ID).click();
    cy.get(CartPage.SHOPPING_CART_BADGE_CLASS).contains(1);
  });

  it("should remove item from the cart", () => {
    LoginPage.makeLogin(users.successUserName);
    cy.get(ProductsPage.ADD_TO_CART_BTN_ID).click();
    cy.get(CartPage.SHOPPING_CART_BADGE_CLASS).contains(1);
    cy.get(ProductsPage.REMOVE_FROM_CART_BTN_ID).click();
    cy.get(CartPage.SHOPPING_CART_BADGE_CLASS).should("not.exist");
  });
});
