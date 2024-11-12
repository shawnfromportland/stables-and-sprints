
<img src="https://github.com/user-attachments/assets/c88b788a-8f51-458c-a575-bf206cf763ba" width="50%" /> 

# Stables & Sprints

**Stables & Sprints** is a 100% AI-generated full stack racehorse management and horse racing simulation app. 
  
This app is an experimental demonstration investigating the potential for using LLM chat tools to generate entire codebases with minimal human intervention, while maximizing for human interpretability, clarity, and ease of DevX. 

### Setup

You can clone the app locally and run it:

1. Clone the repository:
   ```bash
   git clone https://github.com/shawnfromportland/stables-and-sprints.git
   ```

2. Install dependencies for the frontend:
   ```bash
   cd frontend && npm install
   ```

3. Install dependencies for the backend:
   ```bash
   cd ../backend && npm install
   ```

4. Install root dependencies:
   ```bash
   cd .. && npm install
   ```

5. Start the project:
   ```bash
   npm run start
   ```

6. This will start:
   - The backend on `localhost:3000`
   - The frontend on `localhost:3001`

To get a realtime interactive UI of your backend API, visit `localhost:3000/api` (hot-generated Swagger UI).

To launch the front end app experience, go to `localhost:3001`. You should see a hardcoded profile page for user id 1, and a races page to run races. Many features are not implemented beyond the scope of this full stack synthetic software demonstration.

![shawnfromportland_a_jockey_on_a_horse_illustration_with_sharp_86e424fd-93a7-4adb-ac8c-d82ed793007f_0](https://github.com/user-attachments/assets/b30a3e12-3046-4aae-993a-48ce1ad8b1bc)

## Philosophical Overview

This project aims to explore a potential LLM chat-based software development workflow. By minimizing human intervention in the development process and eliminating all human-based writing of actual code almost entirely, it is a proof of concept that raises important questions about the future of software engineering, such as:

- **What does the future of software development look like with advanced AI tools?**
- **Why should developers still write code when AI can do it faster and with fewer mistakes?**
- **How much human involvement is truly necessary to create high-quality, interpretable and maintainable applications?**

### What This Demo Aims to Accomplish:

- **Proof of Concept for a 100% synthetically generated code base that retains full human interpretability**
- **Demonstrate a chat agent-driven development cycle** This app was built by an LLM chat based dev workflow and code generation tools.
- **Provide a working foundation**: A basic horse race simulation app that’s ready to expand upon with additional features like betting, blockchain integration, and more.

### What This Demo Does Not Aim to Accomplish:

- **Full-scale production-ready features**: This app is intentionally kept simple, with many features left out or incomplete to keep the focus on the AI-driven development cycle. the actual subject of the app does not matter. there is no spoon.
- **Polished user experience or advanced graphics**: The UX/UI and graphical elements are minimal, as this demo focuses more on the backend functionality and AI's role in app creation.
- **Complex or unrealistic use cases**: We intentionally avoided intricate features or overly complex logic in favor of demonstrating a straightforward and clean development process.

## App Description

Stables & Sprints simulates horse races, where users can own and race horses. Users can log in, manage their horses, and enter them into races. Admins have additional privileges, such as managing users and scheduling races.

## Developer Experience (devX)

The development workflow for Stables & Sprints eliminates (or minimizes) any human-based coding. Instead, the focus shifts toward structuring requirements, orchestrating AI-assisted code generation, and refining generated components. 

This workflow demonstrates how developers can guide machine-generated code rather than write it themselves, resulting in a potentially faster, more efficient development cycle.

Principles:

- **Focus on Architecting Information Over Implementation**: The developer’s role shifts toward gathering, organizing, and formalizing requirements rather than manual implementation. Clear, concise documentation and user stories define the app’s functionality and structure, reducing reliance on human coding.
- **Backend Generation with NestJS**: The NestJS framework provides a modular, clean architecture suited to AI code generation. By using concise, single-purpose files and adhering to conventions, the backend remains easy for both humans and AIs to understand and modify. Backend resources are generated with CLI commands, reducing context-switching and improving prompt accuracy.
- **Swagger/OpenAPI Integration**: Swagger documentation is auto-generated for the backend API, creating a definition file used by the frontend. This ensures type-safe, error-proof API access on the client side.
- **Frontend Consumption of OpenAPI Definitions**: Using heyAPI, the frontend app consumes the OpenAPI definition, auto-generating client-side services and types. Each frontend function is type-safe and separated for easy access, with raw CSS providing a minimal, responsive UI.
- **Iterative Workflow**: Development changes are made by updating parameters in backend DTOs, models, or controllers, regenerating the Swagger docs, and re-running the frontend codegen. This provides a fast, iterative workflow focused on architecture rather than implementation details.

## Tech Stack

- **Backend**  
  - **NestJS**: Provides a clean, modular structure ideal for AI-driven generation with concise, single-purpose files. [NestJS GitHub](https://github.com/nestjs/nest)
  - **Swagger/OpenAPI**: Auto-generates API documentation and client specification, allowing type-safe API consumption in the frontend. [Swagger GitHub](https://github.com/swagger-api/swagger-ui)
  - **TypeScript**: Ensures strong typing and integrates seamlessly with AI-generated code. [TypeScript GitHub](https://github.com/microsoft/TypeScript)
  - **TypeORM**: Serves as the ORM layer for data modeling and handling entity relationships. [TypeORM GitHub](https://github.com/typeorm/typeorm)
  - **SQLite**: Chosen as the default database for simplicity and ease of setup. [SQLite GitHub](https://github.com/sqlite/sqlite)

- **Frontend**  
  - **React**: Core framework for UI, chosen for compatibility with autogenerated API types and client calls. [React GitHub](https://github.com/facebook/react)
  - **heyAPI**: Processes the OpenAPI spec to generate client-side services, types, and API functions, maintaining complete typing and separation. [heyAPI GitHub](https://github.com/heyapi/heyapi)
  - **Framework-Free Minimal Responsive Raw CSS**: Utilizes straightforward, raw CSS for a minimal, responsive layout that’s mobile-friendly.

This stack, combined with an AI-driven workflow, enables a flexible, efficient, and type-safe development process.
## Example dev workflow lifecycle of a new change request  
...coming soon

# License

This project is licensed under the MIT License - see the LICENSE file for details.

# Note

This project is a work in progress. Technical details and more comprehensive instructions will be added as the project develops.
