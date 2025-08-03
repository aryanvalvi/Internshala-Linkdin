# 🌐 Mini LinkedIn-like Community Platform

A full-stack social networking platform built with modern web technologies, featuring user authentication, post creation, and community interaction capabilities.

## 🚀 Live Demo

**🔗 [Live Application](http://144.91.104.106:3001/)**


## ✨ Features

### 🔐 User Authentication
- **Register/Login System** with email and password
- **JWT-based authentication** for secure sessions
- **Protected routes** for authenticated users only
- **Password hashing** using bcrypt for security

### 📱 User Profiles
- **Complete user profiles** with name, email, and bio
- **Profile customization** and editing capabilities
- **View other users' profiles** and their posts
- **User-specific post feeds**

### 📝 Post Management
- **Create text-only posts** with rich content
- **Public post feed** displaying all community posts
- **Real-time timestamps** showing post creation time
- **Author attribution** with clickable profile links

### 🎨 User Experience
- **Responsive design** that works on all devices
- **Clean, modern UI** inspired by professional networks
- **Intuitive navigation** between feed, profile, and posts
- **Real-time updates** and smooth interactions

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling and validation


### Backend
- **Express.js** - Node.js web application framework
- **TypeScript** - Type-safe server-side development
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing and security
- **CORS** - Cross-origin resource sharing

### Database
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB object modeling for Node.js

### Deployment
- **Personal Vps Server** - Frontend deployment && Backend API deployment


## 📁 Project Structure

```
mini-linkedin-platform/
├── client/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # Reusable UI components
│   │   ├── lib/            # Utility functions and API calls
│   └── package.json
├── bserver/                 # Express.js backend API
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   └── package.json
└── README.md
```

## 🔧 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** for version control

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/aryanvalvi/Internshala-Linkdin
cd Internshala-Linkdin
```

### 2. Backend Setup
```bash
cd backend
npm install
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```

## 🔑 Environment Variables

### Backend (.env)
Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/mini-linkedin
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mini-linkedin

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# CORS
CLIENT_URL=http://localhost:3000
```


## 🏃‍♂️ Running the Application

### Development Mode

1. **Start the Backend Server:**
```bash
cd backend
npm run dev
```
Server will run on `http://localhost:5005`

2. **Start the Frontend Application:**
```bash
cd frontend
npm run dev
```
Application will run on `http://localhost:3001`

### Production Build

1. **Build Backend:**
```bash
cd backend
npm run build
npm start
```

2. **Build Frontend:**
```bash
cd frontend
npm run build
npm start
```

## 🔌 API Endpoints

### Authentication
- `POST /register` - User registration
- `POST /login` - User login
- `GET /check` - Get current user profile

### Users
- `GET /profile/:id` - Get user profile by ID
- `PUT /profile/:id` - Update user profile


### Posts
- `GET /getpost` - Get all posts (public feed)
- `POST /createpost` - Create a new post
- `DELETE /createpost/:id` - Delete post (author only)

## 👥 Demo Users

For testing purposes, you can use these demo accounts:

### Admin User
- **Email:** `admin@123`
- **Password:** `123456`
- **Role:** Administrator with full access


## 📸 Screenshots

### Home Feed and Create post
![Home Feed](screenshotss/home.png)

### User Profile
![User Profile](screenshotss/profile.png)

### signup Post
![Create Post](screenshotss/register.png)

### Login Page
![Login](screenshotss/login.png)





## 📞 Contact

**Your Name** - [aryanvalvi](mailto:aryanvalvi323@gmail.com)

**Project Link:** [http://144.91.104.106:3001)

---

⭐ **Star this repository if you found it helpful!**

---

*Built with ❤️ using Next.js, Express.js, and MongoD
