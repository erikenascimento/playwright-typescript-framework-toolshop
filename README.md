# playwright-typescript-framework-toolshop  
This is a portfolio project intended to display evidence of skills in QA, Automation, Playwright, Typescript and correlate skills.  
It targets the third party application *Practice Software Testing* or *Toolshop*, made by [testsmith-io](https://github.com/testsmith-io). Its repository can be found at https://github.com/testsmith-io/practice-software-testing

### What is the purpose of this project?
This project covers basic applications of automation using Playwright. Therefore the idea is not to perform a full Quality Test of the target application. Be that UI, API or Accessibility. But to show basic coverage of all the core features from the framework.

## Requirements
Node package manager (npm) to install dependencies
https://nodejs.org/learn/getting-started/an-introduction-to-the-npm-package-manager 

## Getting Started
To install all dependencies run:
``` bash
npm install
```
To install all dependencies run:
``` bash
npm install
```

### How to run tests that require authentication
You'll need to define your own `.env` file on this very directory to do that you can simply execute the line below
``` bash
cp .env.example .env
```
This will create an `.env` file locally on your machine that Playwright can reference for the credentials  
Since Toolshop is an open source, public application, [.env.example](/.env.example) is a 1:1 representation of the `.env` file that is supposed to be hidden, but this step is still necessary as a good practice.  
Since Toolshop is an open source, public application, [.env.example](/.env.example) is a 1:1 representation of the `.env` file that is supposed to be hidden, but this step is still necessary as a good practice.  

The credentials used on this framework can be found at: https://testsmith-io.github.io/practice-software-testing/#/ the official documentation page of Toolshop.

### Running Tests
To run the tests, execute the command:
```bash
npx playwright test
```
To run the tests, execute the command:
```bash
npx playwright test
```

### Reports
To show the test reporter, just use:
```bash
npx playwright show-report
```

## Project Structure 
[tests/](./tests/) Contains all the actual tests in the project  
[tests/api](./tests/api/) Houses the tests of the application's API  
[tests/ui](./tests/ui/) Has the tests that do not require any form of authentication  
[tests/ui/auth](./tests/ui/auth/) Is only tests that require authentication  
[docs](./docs) Is where you can find some more information about this project  
[src/pages](/src/pages) A place for the [Page Models](https://playwright.dev/docs/pom) in the project

The other folders are just basic scaffolding from Playwright installer  

## Testing Strategy
dksapjdsioapdj

### UI Tests
- Navigating though product categories: [categories_browser.spec.ts](/tests/ui/unauthenticated/categories_browser.spec.ts)  
- Purchasing a specific product: [buying_product.spec.ts](tests/ui/authenticated/buying_product.spec.ts)
- Customer login: [auth.setup.ts](/tests/ui/authenticated/auth.setup.ts)

### API Tests
- Finding a product by the product name using API: [product_by_query.spec.ts](tests/api/product_by_query.spec.ts)

### Acessibility Tests
- Homepage WCAG conformance using Axe-Core: [home_accessibility.spec.ts](tests/ui/unauthenticated/home_accessibility.spec.ts)
- Basic keyboard navigation: [keyboard_accessibility.spec.ts](tests/ui/unauthenticated/keyboard_accessibility.spec.ts)

## Technologies
Playwright, TypeScript and Github Actions.

## Upcoming Features Roadmap
- Positive and negative testing  
- Reusable fixtures  
- Automated test reporting  
- CI execution  
To show the test reporter, just use:
```bash
npx playwright show-report
```

## Project Structure 
[tests/](./tests/) Contains all the actual tests in the project  
[tests/api](./tests/api/) Houses the tests of the application's API  
[tests/ui](./tests/ui/) Has the tests that do not require any form of authentication  
[tests/ui/auth](./tests/ui/auth/) Is only tests that require authentication  
[docs](./docs) Is where you can find some more information about this project  
[src/pages](/src/pages) A place for the [Page Models](https://playwright.dev/docs/pom) in the project

The other folders are just basic scaffolding from Playwright installer  

## Testing Strategy
dksapjdsioapdj

### UI Tests
- Navigating though product categories: [categories_browser.spec.ts](/tests/ui/unauthenticated/categories_browser.spec.ts)  
- Purchasing a specific product: [buying_product.spec.ts](tests/ui/authenticated/buying_product.spec.ts)
- Customer login: [auth.setup.ts](/tests/ui/authenticated/auth.setup.ts)

### API Tests
- Finding a product by the product name using API: [product_by_query.spec.ts](tests/api/product_by_query.spec.ts)

### Acessibility Tests
- Homepage WCAG conformance using Axe-Core: [home_accessibility.spec.ts](tests/ui/unauthenticated/home_accessibility.spec.ts)
- Basic keyboard navigation: [keyboard_accessibility.spec.ts](tests/ui/unauthenticated/keyboard_accessibility.spec.ts)

## Technologies
Playwright, TypeScript and Github Actions.

## Upcoming Features Roadmap
- Positive and negative testing  
- Reusable fixtures  
- Automated test reporting  
- CI execution  

### Author
Erike Nascimento