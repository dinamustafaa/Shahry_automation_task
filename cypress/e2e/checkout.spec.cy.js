import LoginPage from "../pages/Login";
import ProductsPage from "../pages/Products";
import CartPage from "../pages/Cart";
import CheckoutPage from "../pages/Checkout";
import users from "../fixtures/users.json";

describe("Checkout Test", () => {
  it("should checkout successfully", () => {
    LoginPage.makeLogin(users.successUserName);

    cy.get(ProductsPage.ADD_TO_CART_BTN_ID).click();
    cy.get(CartPage.SHOPPING_CART_BADGE_CLASS).contains(1);
    cy.get(ProductsPage.SHOPPING_CART_ICON_CLASS).click();
    cy.get(CheckoutPage.CHECKOUT_BUTTON_CLASS).click();

    cy.get(CheckoutPage.CHECKOUT_FIELD_FIRST_NAME_ID).type("first_name");
    cy.get(CheckoutPage.CHECKOUT_FIELD_LAST_NAME_ID).type("last_name");
    cy.get(CheckoutPage.CHECKOUT_FIELD_POSTAL_CODE_ID).type("12345");
    cy.get(CheckoutPage.CHECKOUT_BUTTON_CONTINUE_ID).click();
    cy.get(CheckoutPage.CHECKOUT_BUTTON_FINISH_ID).click();

    cy.get(CheckoutPage.CHECKOUT_COMPLETE_HEADER).contains(
      CheckoutPage.CHECKOUT_COMPLETE_HEADER_MESSAGE
    );

    cy.get(CheckoutPage.CHECKOUT_COMPLETE_TEXT).contains(
      CheckoutPage.CHECKOUT_COMPLETE_TEXT_MESSAGE
    );
  });
});
