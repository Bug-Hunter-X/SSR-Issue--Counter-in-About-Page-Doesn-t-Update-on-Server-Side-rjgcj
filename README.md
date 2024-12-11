# Next.js 15 SSR Issue: Counter not Updating on Server-Side

This repository demonstrates a common issue in Next.js 15 applications where state changes within a component do not reflect correctly during server-side rendering (SSR).  Specifically, the counter in the `about.js` page does not reflect the updated count on the initial render but works fine on the client-side.

## Problem

A simple counter is implemented within a Next.js app. While the counter increments correctly on the client side, after the component mounts and client-side JS runs, the initial render during SSR fails to show the correct counter value (which would be 0). 

## Solution

The solution leverages `useMemo` to prevent unnecessary re-renders and ensures the counter is properly initialized on the server. This also helps to optimize performance overall.

## Reproduction

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe that the counter displays as 0 initially. It then increases every second after the client-side takes over.  
