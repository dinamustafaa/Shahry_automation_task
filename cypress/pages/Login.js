import users from "../fixtures/users.json";

export default class LoginPage {
  static USER_NAME_FIELD_ID = "#user-name";
  static PASSWORD_FIELD_ID = "#password";
  static LOGIN_BTN_ID = "#login-button";
  static ERROR_MESSAGE_FOR_LOCKED_USER_TEXT =
    "Epic sadface: Sorry, this user has been locked out.";

  static makeLogin(username) {
    // Visit the saucedemo website
    cy.visit("https://www.saucedemo.com");

    // Find the input field with id 'user-name' and type 'standard_user'
    cy.get(LoginPage.USER_NAME_FIELD_ID).type(username);

    // Find the password field with id 'password' and type 'secret_sauce'
    cy.get(LoginPage.PASSWORD_FIELD_ID).type(users.password);

    // Click on the login button with id 'login-button'
    cy.get(LoginPage.LOGIN_BTN_ID).click();
  }
}
