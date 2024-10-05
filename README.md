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
- `pnpm format`: Formats all files using Prettier
- `pnpm generate:map`: Builds the project and runs the map generation script

## Usage

To generate a map:

```bash
pnpm generate:map
```

This script will create a map based on predefined parameters and interact with an external API to populate it.

## Project Structure

> The project was originally divided into two phases, but has been consolidated into a single script for efficiency. It utilizes a batch execution function with configurable options for rate limiting and exponential backoff.

The project is organized into a modular structure for clarity and maintainability:

```bash
src/
├── api/
│   └── map.ts           # API calls related to map operations
├── lib/
│   ├── converters.ts    # Utility functions for data conversion
│   ├── env.ts           # Environment variable management
│   └── helpers.ts       # General helper functions
├── types/
│   ├── api.ts           # Type definitions for API-related structures
│   └── helpers.ts       # Type definitions for helper functions
└── generateMap.ts       # Main script for map generation

```

- `api/`: Contains modules for interacting with external APIs.
- `lib/`: Houses utility functions and helpers used across the project.
- `types/`: Defines TypeScript interfaces and types used throughout the application.
- `generateMap.ts`: The main entry point for the map generation process.

This structure allows for easy expansion and maintenance of the project, with clear separation of concerns between API interactions, utility functions, and type definitions.

Key features include:

- TypeScript for type safety
- ESLint and Prettier for code quality and formatting
- Modular architecture for easy expansion and maintenance
- Efficient handling of API rate limits

## Environment Variables

Make sure to set up your environment variables in a `.env` file. See [`.env.example`](.env.example) for an example.
Required variables include:

- `API_BASE_URL`: The base URL for the API
- `CANDIDATE_ID`: Your unique candidate identifier
