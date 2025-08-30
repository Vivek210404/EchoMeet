# EchoMeet

[Live App: echomeetapp.onrender.com](https://echomeetapp.onrender.com)

**EchoMeet** is a real-time video conferencing web application that allows users to connect with each other through video, audio, and chat. It is built with **React + Vite** on the frontend and uses **WebRTC** with **Socket.IO** for peer-to-peer communication.

---

## 🚀 Features

- 🎥 High-quality peer-to-peer video and audio calls (WebRTC)  
- 💬 Real-time chat with auto-scroll functionality  
- 📱 Responsive UI for desktop and mobile  
- 🔑 Join as a guest or register/login for personalized experience  
- 🎨 Clean and modern design using **Material UI**  
- 🌐 Live deployment on **Render**  

---

## 🔗 Live Demo

👉 [Click here to try EchoMeet](https://echomeetapp.onrender.com)

---

## 🛠️ Tech Stack

**Frontend**
- React 19 (with Vite)
- React Router DOM
- Material UI (MUI) for components & icons
- Socket.IO Client
- Axios for API calls

**Core Communication**
- WebRTC (STUN servers for peer-to-peer connectivity)
- Socket.IO (signaling server communication)

**Build & Deployment**
- Vite (bundler)
- Render (hosting & deployment)


## ⚡ Getting Started  

### 🔹 Prerequisites  
- Node.js **v18+**  
- npm  
- MongoDB (Atlas or local instance)  

---

### 🔹 Backend Setup  

```sh
cd backend
npm install
npm run dev
```
👉 Runs at **http://localhost:8000** by default.  

---

### 🔹 Frontend Setup  

```sh
cd frontend
npm install
npm run dev
```
👉 Runs at **http://localhost:5173** (Vite).  

---

### 🔹 Build for Production  

```sh
cd frontend
npm run build
```
Build output will be in `frontend/dist/`.  

---

## ⚙️ Environment Configuration  

- **Frontend** – API base URL is managed in `src/environment.js`.  
- **Backend** – Update MongoDB connection in `backend/src/app.js`.  
- **Auth** – JWT tokens are used for secure authentication & session management.  
