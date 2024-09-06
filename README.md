# Pokedex App

## Overview

The Pokemon-Pokedex App is a web application built with Next.js, tRPC, Prisma, and Material-UI. It allows users to search for Pokemon by name, type, and view detailed information about each Pokemon. The app features pagination, caching, and a responsive UI to ensure a smooth and efficient user experience.

## Features

- **Search by Name**: Search for individual Pokemon by their name.
- **Search by Type**: Filter Pokemon by their type (e.g., grass, fire, water).
- **Pagination**: Efficiently paginate through large lists of Pokemon.
- **Caching**: Utilize server-side and client-side caching to improve performance.
- **Responsive UI**: Ensure a seamless experience across different devices and screen sizes.

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **tRPC**: A TypeScript-first RPC framework for building end-to-end typesafe APIs.
- **Prisma**: A modern database toolkit for TypeScript and Node.js.
- **Material-UI**: A popular React UI framework for building responsive and beautiful UIs.
- **node-cache**: A simple in-memory caching library for server-side caching.
- **react-query**: A library for managing and caching server state in React applications.

## Code Quality

### Type Safety

- **tRPC**: Ensures end-to-end type safety by generating TypeScript types for your API routes.
- **Prisma**: Provides type-safe database access with generated TypeScript types.

### Modular Architecture

- **Components**: Organized into reusable components (e.g., `PokemonRow`, `PokedexTable`, `PokemonTypeSelection`).
- **Routers**: tRPC routers are modular and follow a clean architecture pattern.

## Pagination

Pagination is implemented to handle large datasets efficiently. The app uses tRPC to fetch paginated data from the server and Material-UI's `Pagination` component to navigate through the pages.

### Implementation

- **Server-Side**: tRPC queries accept `skip` and `take` parameters to fetch paginated data.
- **Client-Side**: The `Pagination` component from Material-UI is used to handle page navigation.

## Caching

Caching is implemented to improve performance and reduce the load on the database.

### Server-Side Caching

- **node-cache**: Used to cache the results of tRPC queries on the server.
- **Cache Keys**: Cache keys are generated based on the query parameters to ensure unique and consistent caching.

### Client-Side Caching

- **react-query**: Automatically caches the results of tRPC queries on the client side.
- **Stale-While-Revalidate**: Ensures that the UI remains responsive by showing cached data while fetching fresh data in the background.

## Responsive UI

The app is designed to be responsive and provide a seamless experience across different devices and screen sizes.

### Implementation

- **Material-UI**: Utilizes Material-UI's responsive design components and breakpoints.
- **Flexbox**: Uses CSS Flexbox for layout and alignment.
- **Media Queries**: Implements media queries to adjust styles based on screen size.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nagar2817/pokemon-pokedox.git
   cd pokemon-pokedox
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```
3. Prisma Guide:

   ```bash
   npx prisma init
   npx prisma generate

   # adjust schema
   npx prisma migrate dev --name init

   # create prisma/seed.ts
   npx prisma db seed
   ```
3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   DATABASE_URL=your_database_url
   NEXT_PUBLIC_TRPC_URL=http://localhost:3000/api/trpc
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.


## Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the Pokemon data.
- [Next.js](https://nextjs.org/) for the React framework.
- [tRPC](https://trpc.io/) for the TypeScript-first RPC framework.
- [Prisma](https://www.prisma.io/) for the modern database toolkit.
- [Material-UI](https://mui.com/) for the React UI framework.