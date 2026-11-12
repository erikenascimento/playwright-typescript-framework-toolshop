# playwright-typescript-framework-toolshop  

## Project Overview
End-to-end test automation framework for the Practice Software Testing (Toolshop) application, built with Playwright and TypeScript. Featuring UI and API testing, cross-browser execution, test management integration, and CI/CD with GitHub Actions
An end-to-end test automation framework demonstrating UI and API testing, reusable architecture, and continuous integration.

## Technologies
Playwright, TypeScript,

## Upcoming Features
- UI end-to-end automation.
- Positive and negative testing.
- Page Object Model.
- Reusable fixtures.
- API testing.
- Automated test reporting.
- CI execution.

## Project Structure 
[tests/](./tests/) Cotains all the actual tests in the project  
[tests/api](./tests/api/) Houses the tests of the application's API  
[tests/ui](./tests/ui/) Has the tests that do not require any form of authentication  
[tests/ui/auth](./tests/ui/auth/) Is only tests that require authentication  

The other folders are just basic scaffolding from Playwright installer  

## How to run tests that require authentication
You'll need to define your own `.env` directory on this very directory  

Take a look at the file [.exv.example](./.env.example), it shows how this file should be structured.  
By visiting the application documentation at https://testsmith-io.github.io/practice-software-testing/#/?id=default-accounts you can find the actual credentials for this test application and then you can use them to create your own `.env` file by copy pasting the values for the login and the password on the right place.  
Use the same names as it is in [.exv.example](./.env.example) otherwise the framework will be calling a value with that name that you renamed, and the tests will fail.  

## Requirements
Node pack manager (npm) to install dependencies
https://nodejs.org/learn/getting-started/an-introduction-to-the-npm-package-manager 

After installing npm on your machine or container run the commands below on this directory  

## Getting Started
run `npm install` to install all dependencies

### Running Tests
run `npx playwright test` to run the tests  

### Reports
run `npx playwright show-report` to show the test reporter

## Test Coverage
- Basic Navigation  
- Basic Authentication  
- Product Purchase [WIP]

## CI/CD
[WIP]

## Design Decisions
[WIP]

## Limitations
[WIP]

### Author
Erike Nascimento