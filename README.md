# Calculator API

This project implements a simple Calculator API using Node.js, Express, and JWT for authentication.

## Project Overview

This minimal API allows users to perform mathematical calculations by sending POST requests to the `/calculate` endpoint. The API supports basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Setup

1. Install Node.js from [Node.js website](https://nodejs.org).
2. Clone this repository.
3. Run `npm install` to install dependencies.
4. Create a `.env` file and set the required environment variables (e.g., `PORT`, `SECRET_KEY`).

## Usage

### Running the Server

Start the server using the following command:

```bash
npm start
```


### Endpoints

- **POST `/calculate`**: Perform a calculation. Send a POST request to this endpoint with JSON body containing `num1`, `num2`, and the `operator` in the header.

## Additional Information

### CORS Usage

CORS (Cross-Origin Resource Sharing) middleware is added using the `cors` package to handle pre-flight requests for POST requests defined in the Swagger file.

### Swagger Documentation

The API documentation is defined in the Swagger file (`swagger.yaml`). It includes different types of responses for various scenarios such as successful calculations, unauthorized access, and invalid requests.

## Testing

Unit tests for the API endpoints and logic are implemented using Jest and Supertest. Run tests using the following command:

```bash
npm test
```


## Important Notes

- Ensure the required environment variables (`PORT`, `SECRET_KEY`) are set before running the server.
- The API utilizes JWT for authentication. Provide a valid token with the `Bearer` scheme in the `Authorization` header for authorized access to endpoints.
