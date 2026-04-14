# Product Listing Dashboard

A responsive React + Vite product listing dashboard that fetches products from the Fake Store API, supports search, sorting, pagination, and shows polished loading and error states.

## Project Overview

This app provides a clean product browsing experience built with React functional components and Tailwind CSS. Product data is fetched from the public Fake Store API and managed through a shared React Context so search, sorting, pagination, and UI states stay in sync across the interface.

## Features

- Product catalog fetched from `https://fakestoreapi.com/products`
- Search with debounced filtering
- Sort products by name or price
- Paginated product grid
- Responsive product cards with image, category, title, and price
- Loading skeleton state
- Retryable error state
- Shared state with React Context

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Context
- JavaScript

## Setup Instructions

1. Clone the repository.
2. Install dependencies:

	```bash
	npm install
	```

3. Start the development server:

	```bash
	npm run dev
	```

4. Build for production:

	```bash
	npm run build
	```

5. Preview the production build:

	```bash
	npm run preview
	```

## Folder Structure

- `src/components` - UI components such as search, sort, cards, loader, error state, and pagination
- `src/context` - shared application state
- `src/hooks` - reusable custom hooks
- `src/pages` - page-level UI

## Notes

- The app is built with functional components only.
- Tailwind CSS is configured for styling.

## Deployment

Live URL: https://frontend-react-hiring-task-f3b80hx8c-adnan-projects.vercel.app
