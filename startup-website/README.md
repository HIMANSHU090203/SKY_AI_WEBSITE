SKY AI Advanced Research Website
A modern, full-stack web application for SKY AI Advanced Research LLP, featuring a dynamic frontend and integrated backend logic using Next.js API routes and MongoDB Atlas. This project is designed for scalability, maintainability, and a beautiful user experience, optimized for deployment on Vercel.

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
├── package.json     # Dependencies and scripts


Quick Start
Prerequisites

Node.js (v18+ recommended)
npm or yarn
MongoDB Atlas account

1. Clone the Repository
git clone <repo-url>
cd frontend

2. Setup Environment Variables

Create .env.local in frontend/ and add:MONGODB_URI=your-mongodb-atlas-uri
JWT_SECRET=your-jwt-secret


Get your MongoDB Atlas URI from https://cloud.mongodb.com
Use a strong random string for JWT_SECRET

3. Install Dependencies
npm install

4. Start Development Server
npm run dev


The app runs on http://localhost:3000


Environment Variables
Frontend (frontend/.env.local)

MONGODB_URI - MongoDB Atlas connection string
JWT_SECRET - Secret for JWT authentication
(Optional) NEXT_PUBLIC_API_BASE_URL for custom API endpoints


Key Features

Modern UI: Responsive, animated, and visually appealing design
Contact Form: Stores messages in MongoDB Atlas (no email sending)
Admin Panel: Secure login, view contact messages
Blog, Careers, About Us: Informational and interactive pages
3D/Particle Backgrounds: Custom backgrounds for visual engagement
Unified API: All backend logic handled in Next.js API routes


Technologies Used

Frontend & API: Next.js 15, React 19, Tailwind CSS, TypeScript, Lucide Icons, Three.js, p5.js, Mongoose, JWT
Database: MongoDB Atlas
Other: ESLint, Prettier, Dynamic Imports, Modern React Patterns


How to Contribute

Fork the repo and create your branch: git checkout -b feature/your-feature
Commit your changes: git commit -am 'Add new feature'
Push to the branch: git push origin feature/your-feature
Open a Pull Request


Contact
Email: info@sky-ai.in



