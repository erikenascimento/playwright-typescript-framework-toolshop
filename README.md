# playwright-typescript-framework-toolshop  

## Project Overview
End-to-end test automation framework for the Practice Software Testing (Toolshop) application, built with Playwright and TypeScript. Featuring UI testing, cross-browser execution.  
An end-to-end test automation framework demonstrating reusable architecture, and continuous integration.

## Technologies
Playwright, TypeScript,

## Upcoming Features Roadmap
- Positive and negative testing  
- Reusable fixtures  
- Automated test reporting  
- CI execution  

## Project Structure 
[tests/](./tests/) Contains all the actual tests in the project  
[tests/api](./tests/api/) Houses the tests of the application's API  
[tests/ui](./tests/ui/) Has the tests that do not require any form of authentication  
[tests/ui/auth](./tests/ui/auth/) Is only tests that require authentication  
[docs](./docs) Is where you can find some more information about this project  

The other folders are just basic scaffolding from Playwright installer  

## Requirements
Node package manager (npm) to install dependencies
https://nodejs.org/learn/getting-started/an-introduction-to-the-npm-package-manager 

After installing npm on your machine or container run the commands below on this directory  

## Getting Started
run `npm install` to install all dependencies

### How to run tests that require authentication
You'll need to define your own `.env` file on this very directory to do that you can simply execute the line below
``` bash
cp .env.example .env
```
This will create an `.env` file locally on your machine that Playwright can reference for the credentials  
Since Toolshop is an open source, public application, `.env.example` is a 1:1 representation of the `.env` file that is supposed to be hidden, but this step is still necessary as a good practice.  

The credentials used on this framework can be found at: https://testsmith-io.github.io/practice-software-testing/#/ the official documentation page of Toolshop.

### Running Tests
run `npx playwright test` to run the tests  

### Reports
run `npx playwright show-report` to show the test reporter

## Test Coverage
- Basic Navigation  
- Basic Authentication  
- Basic Accessibility with Axe-Core
- Product Purchase
- API Validation  

### Author
Erike Nascimento