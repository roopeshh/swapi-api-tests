# SWAPI API Testing Framework

## Overview

The SWAPI API Testing Framework is designed to provide automated testing for the Star Wars API (SWAPI). It uses a combination of TypeScript, Jest, and Axios to ensure robust, maintainable, and scalable API testing.

## Key Components

- **TypeScript**: Enhances code quality with static typing, making it easier to maintain and refactor.
- **Jest**: A powerful testing framework that provides an easy-to-use assertion library and supports asynchronous testing.
- **Axios**: A promise-based HTTP client that simplifies making requests to the API.
- **ESLint & Prettier**: Tools that ensure code consistency and quality by enforcing coding standards and formatting rules.

## Design Principles

- **Modularity**: The framework is organized into separate components (API client, models, tests) for easy maintenance.
- **Reusability**: Utility functions promote code reuse across different tests.
- **Readability**: Clear naming conventions and structure make the codebase easy to understand.
- **Maintainability**: TypeScript interfaces and modular design make updates straightforward.

## Testing Approach

The framework includes comprehensive coverage of various scenarios, including happy paths, edge cases. Tests are isolated to ensure they do not interfere with each other.

## Continuous Integration

The framework is integrated with GitHub Actions to automate testing on each push. This helps catch issues early in the development process, ensuring high-quality releases.
