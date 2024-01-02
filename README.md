# There is a bug report link 

https://docs.google.com/spreadsheets/d/1O2rLdyhTDgWhZKBENs88-SuUYV5TEn0E/edit?usp=sharing&ouid=109478527178115818879&rtpof=true&sd=true

# Running the Cypress Tests

This README describes how to set up and execute the Cypress tests for this project.

## Prerequisites

- **Node.js and npm:** Ensure you have Node.js (version 14 or above) and npm installed. Download them from [https://nodejs.org/en/download/current](https://nodejs.org/en/download/current).

- Run the following command to install dependecies:

    -  ```bash
        npm install
        ```

## Running Tests

- Run the following command to open cypress
    -  ```bash
        npx cypress open
        ```
    - select test file you'd like to run.

- You can run this command to run tests headlessly
    -  ```bash
        npx cypress run --headless
        ```
