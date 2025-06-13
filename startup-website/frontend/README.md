# SKY AI Frontend

This is the unified frontend and backend for the SKY AI Advanced Research website, built with Next.js 15, React 19, and Tailwind CSS. All API logic is now handled via Next.js API routes, and MongoDB Atlas is used for cloud database storage. The app is ready for seamless deployment to Vercel.

---

## Project Structure

```
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
```

---

## How to Run Locally

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file in the root of `frontend/` with:

```
MONGODB_URI=your-mongodb-atlas-uri
JWT_SECRET=your-jwt-secret
```

- Get your MongoDB Atlas URI from https://cloud.mongodb.com
- Use a strong random string for `JWT_SECRET`

---

## How to Deploy to Vercel
1. Push your code to GitHub.
2. Go to https://vercel.com and import your repo.
3. Set the environment variables (`MONGODB_URI`, `JWT_SECRET`) in the Vercel dashboard.
4. Deploy!

---

## Key Features
- **Modern UI:** Responsive, animated, and visually appealing design
- **Contact Form:** Stores messages in MongoDB Atlas (no email sending)
- **Admin Panel:** Secure login, view contact messages
- **Blog, Careers, About Us:** Informational and interactive pages
- **3D/Particle Backgrounds:** Custom backgrounds for visual engagement
- **Unified API:** All backend logic handled in Next.js API routes

---

## Technologies Used
- **Frontend & API:** Next.js 15, React 19, Tailwind CSS, TypeScript, Lucide Icons, Three.js, p5.js, Mongoose, JWT
- **Database:** MongoDB Atlas
- **Other:** ESLint, Prettier, Dynamic Imports, Modern React Patterns

---

## Contribution Guide
1. Fork and branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -am 'Describe your change'`
3. Push and open a PR

---

## Contact
- Email: info@sky-ai.in

---

## License
MIT
