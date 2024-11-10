# SWAPI API Testing Framework

## Introduction

This project is designed to perform automated testing of the Star Wars API (SWAPI) using TypeScript, Jest, and Axios.

## Project structure

```
swapi-api-tests/
├── src/
│   ├── api/          # API client
│   ├── models/       # TypeScript interfaces for API responses
│   ├── tests/        # Test files
│   └── utils/        # Utility functions and helpers
├── config/           # Configuration file
├── report/           # Test reports (generated after running tests)
├── .eslintrc.js      # ESLint configuration file
├── jest.config.js    # Jest configuration file
├── tsconfig.json     # TypeScript configuration file
└── package.json      # Project metadata and scripts
```

## Prerequisites

- **Node.js**: Version 22
- **Yarn**: Package manager for installing dependencies
- **Windows**: PowerShell or Command Prompt
- **MacBook**: Terminal
- VS Code or any other IDEs to look at the project structure

## Setting up project

- Clone the repository `swapi-api-tests`
- Navigate to `swapi-api-tests` on your Terminal/Powershell
- Install all the dependencies with the below command
  ```bash
  yarn install
  ```

## Running the tests

- Run the API tests with command
  ```bash
  yarn test
  ```
- On completion of the tests, test report is generated in the folder `report`. You can open `report.html` to read the reports.

## Static checks

- To make sure that the coding style remains the same for everyone, eslint and prettier rules have been set up in the project.
- **ESLint**: Lints JavaScript and TypeScript code to catch errors and enforce coding standards.
- **Prettier**: Automatically formats code to maintain a consistent style.

## Continuous Integration

- The project is integrated with GitHub Actions to automate test execution on each push and on creation of pull request. This provides immediate feedback on test results, ensuring code quality and functionality.
- You can see the tests run on GitHub Actions [here](https://github.com/roopeshh/swapi-api-tests/actions).
- We also have html reports for each test run uploaded as an artifact, that you can find in the example link [here](https://github.com/roopeshh/swapi-api-tests/actions/runs/11768412190) in the `Artifacts` section.
- Alternatively, we can also view the test results for each test runs in `API Test Report` section in the  job itself like in this [example](https://github.com/roopeshh/swapi-api-tests/actions/runs/11768412190/job/32778212241).


## Note
- You can find more details on the project and test cases below:
    - [description](https://github.com/roopeshh/swapi-api-tests/blob/main/Description.md)
    - [testcases](https://github.com/roopeshh/swapi-api-tests/blob/main/TestCases.md)