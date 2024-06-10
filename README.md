# 🚀 Node.js TypeScript Boilerplate

This is a boilerplate project for building Node.js applications using TypeScript. It includes a basic setup for Express.js, custom logging middleware, and route management.

## 📦 How to Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run start:dev
   ```

## Project Structure

├── src/
│ ├── **mocks**/
│ ├── **tests**/
│ ├── dtos/
│ │ └── CreateUser.dto.ts
│ ├── e2e/
│ │ └── index.test.ts
│ ├── handlers/
│ │ └── users.ts
│ ├── routes/
│ │ └── users.ts
│ ├── types/
│ │ ├── query-params.ts
│ │ └── response.ts
│ ├── createApp.ts
│ ├── index.ts
│ ├── logger.ts

### 📂 Explanation of Structure

- **`src/`**: Source code directory.
  - **`__mocks__/`**: Directory for mock data or mock functions for testing.
  - **`__tests__/`**: Directory for unit tests.
  - **`dtos/`**: Directory for Data Transfer Objects (DTOs).
    - **`CreateUser.dto.ts`**: DTO for creating a user.
  - **`e2e/`**: Directory for end-to-end tests.
    - **`index.test.ts`**: End-to-end test for the index route.
  - **`handlers/`**: Directory for request handlers.
    - **`users.ts`**: Handlers for user-related operations.
  - **`routes/`**: Directory for route definitions.
    - **`users.ts`**: Route definitions for user-related endpoints.
  - **`types/`**: Directory for TypeScript type definitions.
    - **`query-params.ts`**: Type definitions for query parameters.
    - **`response.ts`**: Type definitions for responses.
  - **`createApp.ts`**: Module for creating and configuring the Express application.
  - **`index.ts`**: Main entry point of the application.
  - **`logger.ts`**: Custom logging middleware.

## 📝 Additional Information

This setup provides a structured way to build a Node.js application using TypeScript, with clear separation of concerns and organized testing. It includes everything you need to get started quickly and scale your application efficiently.

Feel free to customize the structure and add more features as per your requirements. Happy coding! 💻
