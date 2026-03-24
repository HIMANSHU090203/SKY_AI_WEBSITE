SKY AI Frontend
This is the unified frontend for the SKY AI Advanced Research website, built with Next.js 15, React 19, and Tailwind CSS. All API logic is handled via Next.js API routes, and MongoDB Atlas is used for cloud database storage. The app is optimized for seamless deployment to Vercel.

Manifest note:
- Root `startup-website/package.json` is the source-of-truth manifest for app dependencies and scripts.
- This folder contains app source code; run commands from `startup-website/`.

Project Structure
frontend/
├── src/
│   ├── app/         # Next.js app directory (pages/routes, API)
│   │   ├── api/     # Next.js API routes (auth, contact, etc.)
│   │   └── ...
│   ├── components/  # Reusable UI and background components
│   ├── lib/         # API utilities and helpers
│
├── public/          # Static assets
├── next.config.ts   # Next.js config (rewrites, etc.)


How to Run Locally
npm install
npm run dev
# Visit http://localhost:3000


Environment Variables
Create a .env.local file in the root of frontend/ with:
MONGODB_URI=your-mongodb-atlas-uri
JWT_SECRET=your-jwt-secret


Get your MongoDB Atlas URI from https://cloud.mongodb.com
Use a strong random string for JWT_SECRET


Key Features

Modern UI: Responsive, animated, and visually appealing design
Contact Form: Stores messages in MongoDB Atlas (no email sending)
Admin Panel: Secure login, view contact messages
Blog, Careers, About Us: Informational and interactive pages
3D/Particle Backgrounds: Custom backgrounds for visual engagement
Unified API: All logic handled in Next.js API routes


Technologies Used

Frontend & API: Next.js 15, React 19, Tailwind CSS, TypeScript, Lucide Icons, Three.js, p5.js, Mongoose, JWT
Database: MongoDB Atlas
Other: ESLint, Prettier, Dynamic Imports, Modern React Patterns


Contribution Guide

Fork and branch: git checkout -b feature/your-feature
Make changes and commit: git commit -am 'Describe your change'
Push and open a PR


Contact
Email: info@sky-ai.in



