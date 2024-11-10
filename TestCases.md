# SWAPI API Test Cases

This document describes the test cases for the SWAPI API tests. The goal is to ensure that the API endpoints for People and Planets resources are functioning correctly.

## Test Cases

### People Resource

#### Test Case 1: Retrieve a Person by Valid ID

- **Description**: Verify that a person can be retrieved by a valid ID.
- **Preconditions**: A person with the given ID exists in the database.
- **Steps**:
  1. Send a GET request to `/people/1`.
  2. Verify the response status code is 200.
  3. Validate the response body contains the expected fields and values.
- **Expected Result**: The response status code is 200, and the response body contains the correct person data.

#### Test Case 2: Retrieve a Person by Invalid ID

- **Description**: Verify that an error is returned when retrieving a person by an invalid ID.
- **Preconditions**: No person exists with the given invalid ID.
- **Steps**:
  1. Send a GET request to `/people/9999`.
  2. Verify the response status code is 404.
  3. Validate the response body contains an error message.
- **Expected Result**: The response status code is 404, and the response body contains an error message.

### Planets Resource

#### Test Case 1: Retrieve a Planet by Valid ID

- **Description**: Verify that a planet can be retrieved by a valid ID.
- **Preconditions**: A planet with the given ID exists in the database.
- **Steps**:
  1. Send a GET request to `/planets/1`.
  2. Verify the response status code is 200.
  3. Validate the response body contains the expected fields and values.
- **Expected Result**: The response status code is 200, and the response body contains the correct planet data.

#### Test Case 2: Retrieve a Planet by Invalid ID

- **Description**: Verify that an error is returned when retrieving a planet by an invalid ID.
- **Preconditions**: No planet exists with the given invalid ID.
- **Steps**:
  1. Send a GET request to `/planets/9999`.
  2. Verify the response status code is 404.
  3. Validate the response body contains an error message.
- **Expected Result**: The response status code is 404, and the response body contains an error message.
