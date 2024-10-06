# Megaverse

Megaverse is a project that generates and manipulates 2D map structures. It demonstrates efficient handling of large datasets, API interactions, and implements rate limiting and backoff strategies.

## Requirements

- Node.js >= 18
- pnpm 8.15.6 or higher

## Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:jcurbelo/megaverse.git
cd megaverse
pnpm install
```

## Scripts

This project uses pnpm for package management and includes the following scripts:

- `pnpm build`: Cleans the dist directory and builds the project
- `pnpm test`: Runs the test suite
- `pnpm format`: Formats all files using Prettier
- `pnpm generate:map`: Builds the project and runs the map generation script

## Usage

To generate a map:

```bash
pnpm generate:map
```

This script will create a map based on predefined parameters and interact with an external API to populate it.

To run tests:

```bash
pnpm test
```

This command runs the tests suite, ensuring the map generation and validation work correctly.

## Project Structure

> The project was originally divided into two phases, but has been consolidated into a single script for efficiency. It utilizes a batch execution function with configurable options for rate limiting and exponential backoff.

The project is organized into a modular structure for clarity and maintainability:

```bash
src/
├── api/
│   └── map.ts                # API calls related to map operations
├── elements/
│   ├── baseElement.ts        # Base class for all map elements
│   ├── cometh.ts             # ☄comETH element class
│   ├── map.ts                # Map-related functionality
│   ├── polyanet.ts           # 🪐POLYanet element class
│   ├── soloon.ts             # 🌙SOLoon element class
│   └── space.ts              # 🌌Space element class
├── factories/
│   └── mapElementFactory.ts  # Factory for creating map elements
├── interfaces/
│   ├── IMapElement.ts        # Interface for map elements
│   ├── IMapElementFactory.ts # Interface for map element factory
│   └── IMapService.ts        # Interface for map service
├── lib/
│   ├── env.ts                # Environment variable management
│   └── helpers.ts            # General helper functions
├── services/
│   └── mapService.ts         # Service for map operations
├── types/
│   ├── api.ts                # Type definitions for API-related structures
│   └── helpers.ts            # Type definitions for helper functions
└── generateMap.ts            # Main script for map generation

test/                          # Tests

```

- `api/`: Modules for interacting with external APIs.
- `elements/`: Classes for different map elements.
- `factories/`: Factory for creating map elements.
- `interfaces/`: Interfaces for map elements, factories and services.
- `lib/`: Utility functions and helpers used across the project.
- `services/`: Service for map operations.
- `types/`: Types used throughout the application.
- `generateMap.ts:`Main entry point for the map generation process.

This structure allows for easy expansion and maintenance of the project, with clear separation of concerns between API interactions, element definitions, factories, utility functions, and type definitions.

Key features include:

- TypeScript for type safety
- ESLint and Prettier for code quality and formatting
- Modular architecture for easy expansion and maintenance
- Efficient handling of API rate limits
- Factory pattern for creating map elements
- Rule-based system for map validation
- SOLID principles adherence

## Adding New Map Elements

To add a new map element:

1. Create a new class in the `elements/` directory, extending the `BaseMapElement` class.
2. Add the new element type to the `elementsCreatorFns` object in `src/factories/mapElementFactory.ts`.
3. The `MapElementType` will be automatically inferred from the `elementsCreatorFns` object.

## Map Validation

The project includes a rule-based system for validating map elements:

- Each element class implements a `check(map: Map)` method that defines its placement rules.
- The `MapService` service includes a `validateMap(map: Map)` method that checks all elements against their rules.
- Map validation is performed before element creation in the `generateMap` function.

This design allows for easy extension of the map element types without modifying multiple files across the project.

## Environment Variables

Make sure to set up your environment variables in a `.env` file. See [`.env.example`](.env.example) for an example.
Required variables include:

- `API_BASE_URL`: The base URL for the API
- `CANDIDATE_ID`: Your unique candidate identifier
