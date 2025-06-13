# SKY AI Advanced Research Website

A modern, full-stack web application for SKY AI Advanced Research LLP, featuring a dynamic frontend (Next.js/React) and a robust backend (Node.js/Express/MongoDB). This monorepo is designed for scalability, maintainability, and a beautiful user experience.

---

## Monorepo Structure

```
startup-website/
├── frontend/   # Next.js 15 (React 19) app
├── backend/    # Node.js + Express + MongoDB API
```

---

## Quick Start

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (local or Atlas)

### 1. Clone the Repository
```bash
git clone <repo-url>
cd startup-website
```

### 2. Setup Environment Variables
- Copy `.env.example` to `.env` in `backend/` and fill in MongoDB URI, JWT secret, etc.
- (Optional) Set up `.env.local` in `frontend/` for custom frontend variables.

### 3. Install Dependencies
```bash
cd backend && npm install
cd ../frontend && npm install
```

### 4. Start Development Servers
- **Backend:**
  ```bash
  cd backend
  npm run dev
  # or: npm start
  ```
- **Frontend:**
  ```bash
  cd frontend
  npm run dev
  ```

- The frontend runs on [http://localhost:3000](http://localhost:3000)
- The backend runs on [http://localhost:5000](http://localhost:5000)

---

## Environment Variables

### Backend (`backend/.env`)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret for JWT authentication
- (Optional) Other variables as needed

### Frontend (`frontend/.env.local`)
- (Optional) `NEXT_PUBLIC_API_BASE_URL` for custom API endpoints

---

## Key Features
- **Modern UI:** Responsive, animated, and visually appealing design
- **Contact Form:** Stores messages in MongoDB (no email sending)
- **Admin Panel:** Secure login, view contact messages
- **Blog, Careers, About Us:** Informational and interactive pages
- **3D/Particle Backgrounds:** Custom backgrounds for visual engagement
- **API Proxy:** Next.js rewrites for seamless API calls in development

---

## Technologies Used
- **Frontend:** Next.js 15, React 19, Tailwind CSS, TypeScript, Lucide Icons, Three.js, p5.js
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT Auth
- **Other:** ESLint, Prettier, Dynamic Imports, Modern React Patterns

---

## How to Contribute
1. Fork the repo and create your branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -am 'Add new feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Open a Pull Request

---

## Contact
- Email: info@sky-ai.in
- Website: https://sky-ai.in

---

## License
This project is licensed under the MIT License. 