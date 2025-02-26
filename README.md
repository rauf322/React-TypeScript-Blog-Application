# 📖 React TypeScript Blog Application

A modern blog application built with **React, TypeScript, and Vite**, demonstrating clean architecture and best practices for building scalable web applications.

## ✨ Features

- 🔐 **Authentication system** with protected routes  
- 📝 **CRUD operations** for blog posts  
- 🔍 **Search and filter functionality**  
- 📱 **Responsive design** for all devices  
- 🎨 **Custom UI components** for reusability  
- 🔄 **Pagination support** for better navigation  
- 🌐 **REST API integration** with [JSONPlaceholder](https://jsonplaceholder.typicode.com/)  

---

## 🛠 Tech Stack

| Category         | Technology |
|-----------------|------------|
| **Frontend**    | React 18 |
| **Language**    | TypeScript |
| **Build Tool**  | Vite |
| **Routing**     | React Router DOM |
| **HTTP Client** | Axios |
| **Styling**     | CSS Modules |
| **State Mgmt.** | React Context API |

---

## 📂 Project Structure

```bash
src/
├── api/                   # API service layer
│   └── PostService.tsx
├── components/            # UI Components
│   ├── ui/                # Reusable UI components
│   ├── pages/             # Page components
│   └── router/            # Routing configuration
├── context/               # React Context definitions
├── hooks/                 # Custom React hooks
├── interfaces/            # TypeScript interfaces
└── styles/                # Global styles
```

---

## 🚀 Getting Started

### ✅ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.15.0 or higher)  
- npm or yarn package manager  

### 📦 Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/rauf322/vite-project.git
   cd vite-project
   ```

2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**  
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at: **`http://localhost:5173`**

---

## 📌 Features in Detail

### 🔑 Authentication
- Login system with **protected routes**
- Authentication state managed via **Context API**
- Persistent authentication using **localStorage**

### 📝 Blog Post Management
- **View** all posts with pagination  
- **Search** posts by title  
- **Sort** posts by different criteria  
- **View** individual post details  
- **Create** new posts  
- **Delete** existing posts  

### 🎨 UI Components
- **Custom Button** component  
- **Modal windows**  
- **Loading spinner**  
- **Navigation bar**  
- **Form inputs**  
- **Select dropdown**  
- **Pagination controls**  

---

## ⚙️ Project Configuration

| File               | Description |
|--------------------|-------------|
| `tsconfig.json`   | TypeScript configuration |
| `vite.config.ts`  | Vite build configuration |
| `package.json`    | Project dependencies & scripts | 

---

## 🙌 Acknowledgments

Special thanks to the following resources:  

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) – Fake REST API  
- [React Documentation](https://react.dev/)  
- [TypeScript Documentation](https://www.typescriptlang.org/)  
- [Vite Documentation](https://vitejs.dev/)  

Enjoy coding! 🚀🎉
