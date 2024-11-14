This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Install dependencies using ```npm install```
2. Copy the ```.env.example``` file to ```.env``` or ```.env.local```.
3. Run the development server.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The main page exists at ```app/page.tsx``` while the UI elements have been broken into components and can be found in ```src/components``` with accompanying .scss modules.

Global styles, fonts, and variables are located in ```src/styles```.

The backend API is proxied through Next.js route handlers found in ```app/api```. Make sure to set your .env variables.

