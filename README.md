# UniResourceHub 🎓

UniResourceHub is a professional, high-performance platform designed for university students to share, discover, and manage academic resources. It features **AI-powered Semantic Search**, **Cloudflare R2 storage**, and a robust **Admin approval system**.

[![Live Demo](https://img.shields.io/badge/Demo-Live-blue?style=for-the-badge&logo=vercel)](https://uni-resource-hub-18s1.vercel.app/)

## 🚀 Key Features

- **🧠 Semantic AI Search**: Uses Google Gemini Embeddings and `pgvector` to understand the *meaning* of your searches, not just keywords.
- **⚡ Hybrid Search Engine**: Combines vector similarity with traditional keyword matching for the most accurate results.
- **☁️ Cloudflare R2 Storage**: Scalable, high-speed S3-compatible storage for all PDFs, images, and documents.
- **🛡️ Admin Dashboard**: Secure moderation system where admins can approve or reject uploaded resources.
- **📱 Responsive Design**: Modern, glassmorphic UI built with React and Tailwind CSS.
- **🔐 Secure Authentication**: JWT-based auth with protected routes and role-based access.
- **💤 Optimized Performance**: Route-level lazy loading and Suspense for a smooth user experience.

---

## 🛠 Tech Stack

### Frontend
- **React 18** (with Hooks & Context)
- **Tailwind CSS** (Modern styling)
- **React Router Dom** (Lazy loading & Suspense)
- **Axios** (API communication)
- **React Hot Toast** (Notifications)

### Backend
- **Node.js & Express**
- **Prisma ORM** (Database management)
- **PostgreSQL (Neon)** with `pgvector` extension
- **Google GenAI SDK** (Gemini Embeddings)
- **AWS SDK (S3)** (Cloudflare R2 Integration)
- **Multer** (File handling)

---

## ⚙️ Setup Instructions

### 1. Prerequisites
- Node.js installed
- PostgreSQL database (with `pgvector` extension enabled)
- Google Gemini API Key
- Cloudflare R2 Bucket credentials

### 2. Environment Variables
Create a `.env` file in the `Server` directory:

```env
PORT=3000
DATABASE_URL="your-postgresql-url"
GEMINI_API_KEY="your-gemini-api-key"

# Cloudflare R2
R2_ENDPOINT="your-r2-endpoint"
R2_ACCESS_KEY="your-access-key"
R2_SECRET_KEY="your-secret-key"
R2_BUCKET="your-bucket-name"
R2_PUBLIC_URL="your-public-bucket-url"

# Auth
JWT_SECRET="your-secret"
ACCESS_TOKEN_EXPIRY="1d"
```

### 3. Installation
```bash
# Install dependencies for both Client and Server
cd Client && npm install
cd ../Server && npm install

# Generate Prisma Client
npx prisma generate
```

### 4. Database Setup (Crucial for Vector Search)
```bash
# 1. Run migrations
npx prisma migrate dev

# 2. Setup Vector Indices (HNSW)
node scripts/setupVectorIndices.js

# 3. Populate existing data with embeddings
node scripts/populateEmbeddings.js
```

### 5. Running the Project
```bash
# Run Backend (from Server dir)
npm run dev

# Run Frontend (from Client dir)
npm run dev
```

---

## 📂 Project Structure

```
UniResourceHub/
├── Client/                 # React Frontend
│   ├── src/
│   │   ├── Pages/         # Route-level components
│   │   ├── components/    # Reusable UI elements
│   │   ├── lib/           # Axios & configuration
│   │   └── store/         # State management
├── Server/                 # Express Backend
│   ├── controller/        # Business logic
│   ├── middleware/        # Auth & validation
│   ├── prisma/            # Database schema
│   ├── utils/             # R2, AI, and Helpers
│   └── scripts/           # DB maintenance tools
```

## 📄 License
This project is for academic use. All rights reserved.
