This project is a boilerplate for [Next.js](https://nextjs.org/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Function Description

The `pages` directory is mapped to `/*`. However, the `pages/api` directory is excluded.

[API routes](https://nextjs.org/docs/api-routes/introduction) can accessed at [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

[MSW](https://mswjs.io/) as a mock server.
A sample can found in `pages/mock_samaple.tsx` and `src/mocks/` directory.

Formatter settings are `.vscode/settings.json` and `.prettierrc`.

## Environment Variables

There are three types environment variables: dev, staging, and production.
Environment Variables settings are set in `src/env` directory.

## Build files

Running build commands for production files:

```bash
npm run build
# or
yarn build
```
