# AI Journaling App

An AI-powered journaling app that helps you reflect on your day.  
It analyzes each journal entry, detects the overall mood, and generates a concise summary with an emoji that captures how you felt.

## Screenshots

<img width="1920" height="860" alt="main" src="https://github.com/user-attachments/assets/496f8fc2-0b13-481c-9344-d48dddb9e173" />
<img width="1890" height="991" alt="deployedMain" src="https://github.com/user-attachments/assets/1cdc5fee-aeac-4c22-b55f-86f89f4e12fd" />

## Features

- **Journal entries with CRUD**: Create, read, update, and delete entries stored in a Convex database.
- **AI-powered reflection**: Generates a short natural-language summary of your entry.
- **Mood detection**: Classifies the mood of your entry and displays a representative emoji.
- **Modern UI**: Built with Next.js, Tailwind CSS, and component libraries for a clean, responsive interface.

## Tech Stack

- **Framework**: Next.js (App Router) with TypeScript
- **Frontend**: React, Tailwind CSS, shadcn/ui components
- **Backend / Data**: Convex
- **AI**: OpenAI (or compatible LLM API)
- **UI Libraries**: FlyonUI (and others as configured)

## Project Structure

High-level structure of the project:

```text
.
├ app/
│ ├ page.tsx          # Main page / journaling experience
│ ├ layout.tsx        # Root layout for the app
│ ├ providers.tsx     # Global providers (e.g. Convex, theme)
│ ├ globals.css       # Global styles (Tailwind base/styles)
│ └ favicon.ico
│
├ components/
│ ├ editor.tsx        # Journal editor (text area + controls)
│ ├ entries.tsx       # List of journal entries (CRUD UI)
│ ├ aiResult.tsx      # Container that uses AI reflection component
│ └ ui/
│    ├ button.tsx     # Reusable button component (shadcn-style)
│    ├ card.tsx       # Card UI component
│    └ textarea.tsx   # Textarea UI component
│
├ lib/
│ └ utils.ts          # Shared utilities (e.g. Tailwind class merger)
│
├ convex/
│ ├ schema.ts         # Convex data schema
│ ├ entries.ts        # Convex functions for journal entries
│ ├ _generated/       # Convex generated client & types
│ ├ README.md
│ └ tsconfig.json
│
├ public/             # Static assets (icons, SVGs, etc.)
│ ├ file.svg
│ ├ globe.svg
│ ├ next.svg
│ ├ vercel.svg
│ └ window.svg
│
├ package.json
├ tsconfig.json
├ next.config.ts
├ postcss.config.mjs
├ eslint.config.mjs
├ LICENSE
└ README.md

##Getting Started

#Prerequisites:

-Node.js >= 18
-npm, pnpm, or yarn
-A GitHub account (for cloning the repo)
-Optional but recommended: a Vercel account and a Convex account

#Installation:

-Clone the repository and install    dependencies:

-git clone https://github.com/<ThatGui887>/why-knot.git
-cd why-knot
-npm install

#Environment Variables:

-Create a .env.local file in the project root.

#Typical variables:

-OPENAI_API_KEY=your_openai_api_key_here
-CONVEX_DEPLOYMENT=your_convex_deployment_url_or_id
-CONVEX_AUTH_TOKEN=your_convex_auth_token

-OPENAI_API_KEY: API key for calling the AI provider.
-Convex variables: Values needed to connect your app to your Convex deployment.
-Do not commit .env.local to version control.

#Running the App Locally

Start the development server:

-npm run dev
-Then open http://localhost:3000 in your browser.

#Building for Production
Create a production build:

-npm run build
-npm start
-This runs the app in production mode on http://localhost:3000.

#Usage:

-Open the app in your browser.
-Write a journal entry in the editor.
-Save the entry; it will be stored in Convex.

The app will generate:

-A summary of your entry.
-A mood label and emoji that best represent your writing.
-View, edit, or delete previous entries from the entries list.
-Development Notes
-UI components under components/ui follow the shadcn/ui pattern and are styled with Tailwind CSS.
-Convex functions in convex/entries.ts are responsible for reading and writing journal entries.
-The AI reflection UI is handled by AIReflection (used inside aiResult.tsx).

#Deployment

This app is well-suited for deployment on Vercel.

Typical Vercel configuration:

-Build command: npm run build
-Output directory: .next
-Configure the same environment variables on Vercel that you use in .env.local.
-Convex should be deployed and connected according to Convex’s documentation.

#License

-This project is licensed under the MIT License.
-See the LICENSE file for more details.
