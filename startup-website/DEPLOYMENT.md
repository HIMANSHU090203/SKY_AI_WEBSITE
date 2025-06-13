# SKY AI - Vercel Deployment Guide

## Prerequisites
1. GitHub account
2. Vercel account (free)
3. MongoDB Atlas account (free)

## Step 1: Environment Variables Setup

Create these environment variables in Vercel (or `.env.local` for local development):

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/skyai?retryWrites=true&w=majority
JWT_SECRET=your-super-secure-random-jwt-secret-here
```

### Getting MongoDB URI:
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a free cluster
3. Get connection string from "Connect" button
4. Replace `<username>` and `<password>` with your credentials

### Generating JWT Secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

## Step 2: Push to GitHub

1. Initialize git in the `frontend` folder:
```bash
cd startup-website/frontend
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub
3. Push your code:
```bash
git remote add origin https://github.com/yourusername/sky-ai-website.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Vercel CLI (Recommended)
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow prompts:
   - Link to existing project? No
   - Project name: sky-ai-website
   - Directory: `./` (since you're in frontend folder)
   - Override settings? No

### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Set root directory to `frontend`
5. Add environment variables in settings

## Step 4: Add Environment Variables in Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret

## Step 5: Create Admin User

After deployment, you need to create an admin user. Run the seed script:

```bash
# In your local frontend directory
npm run seed:admin
```

Or manually create an admin user in MongoDB Atlas.

## Step 6: Test Deployment

1. Visit your Vercel URL
2. Test contact form
3. Test admin login at `/admin/login`
4. Verify admin can see messages at `/admin/messages`

## Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**
   - Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
   - Check connection string format
   - Verify credentials

2. **Build Errors**
   - Check Node.js version compatibility
   - Ensure all dependencies are in package.json

3. **API Routes Not Working**
   - Verify no localhost references remain
   - Check environment variables are set

### Vercel Free Tier Limits:
- 100GB bandwidth/month
- 100 deployments/day
- 10s function execution time
- No custom domains on hobby plan

## Post-Deployment

1. Set up custom domain (if needed)
2. Configure analytics
3. Set up monitoring
4. Regular database backups

## Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel

# Deploy production
vercel --prod
``` 