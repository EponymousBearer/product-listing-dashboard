# Frontend React Hiring Task

This project contains two task pages in one React + Vite application:

- Task 1: Product listing experience with search, sorting, pagination, loading state, and error handling.
- Task 2: Registration form flow with reusable form components, custom validation logic, and success state UI.

## Routes

- / -> Products page (ListingPage)
- /register -> Register page (RegisterPage)

Routing is implemented with React Router v6 and wrapped in a shared application layout with a top navigation bar.

## What Is Implemented

### Task 1: Product Listing

- Fetches products from https://fakestoreapi.com/products
- Debounced search input
- Sorting by product name and price
- Client-side pagination
- Loading and error UI states
- Product data/state managed through ProductContext

### Task 2: Register Form

- Custom form state with useState (no third-party form libraries)
- Field-level and form-level validation helpers in src/utils/validators.js
- Reusable FormField component with accessible error messages
- PasswordInput with show/hide toggle and strength indicator
- SuccessMessage card with fade-in animation
- Simulated async submit delay with loading spinner

## Shared Layout

- Top navigation includes:
  - App logo/name
  - Products link
  - Register link
- Active link styling via NavLink
- Both routes rendered in a common padded content area

## Styling

- Tailwind CSS is used throughout
- Custom Tailwind tokens and utilities include:
  - brand colors (brand.500 and brand.600)
  - fadeIn animation/keyframes
  - btn-primary component class

## Tech Stack

- React
- React Router DOM v6
- Vite
- Tailwind CSS
- React Context
- JavaScript

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Key Files

- src/main.jsx
- src/App.jsx
- src/pages/ListingPage.jsx
- src/pages/RegisterPage.jsx
- src/components/FormField.jsx
- src/components/PasswordInput.jsx
- src/components/SuccessMessage.jsx
- src/utils/validators.js
- src/context/ProductContext.jsx
