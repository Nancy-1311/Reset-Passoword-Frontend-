# 🔐 Password Reset Flow App

A full-stack web application that allows users to **register, login, and securely reset their password via email verification**.

---

## 🚀 Features

- 📝 User Registration (Name, Email, Password)
- 🔐 User Login Authentication
- 📧 Forgot Password (Email-based reset link)
- 🔑 Secure Token Generation & Expiry
- 🔄 Reset Password via Token
- 🎨 Responsive UI using Bootstrap + Gradient Design

---

## 🧩 Tech Stack

### Frontend

- React.js
- Bootstrap
- Axios
- React Router DOM

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- Nodemailer
- bcrypt.js

---

## 📁 Project Structure

```
password-reset-app/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── .env
```

---

## 🔄 Application Flow

1. User registers an account
2. User logs in
3. User clicks "Forgot Password"
4. Enters email → receives reset link
5. Clicks link → redirected to reset page
6. Enters new password
7. Password updated successfully

---

## ⚙️ Environment Variables

### Backend (.env)

```
MONGO_URI=your_mongodb_connection_string
EMAIL=your_email@gmail.com
PASSWORD=your_app_password
PORT=5000
```

### Frontend (.env)

```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## ▶️ Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/password-reset-app.git
```

---

### 2. Setup Backend

```
cd backend
npm install
npm start
```

---

### 3. Setup Frontend

```
cd frontend
npm install
npm start
```

---

## 📧 Email Configuration

- Use **Gmail App Password**
- Enable **2-Step Verification**
- Generate App Password from Google Account

---

## 🧪 API Endpoints

| Method | Endpoint                        | Description      |
| ------ | ------------------------------- | ---------------- |
| POST   | /api/auth/register              | Register user    |
| POST   | /api/auth/login                 | Login user       |
| POST   | /api/auth/forgot-password       | Send reset email |
| POST   | /api/auth/reset-password/:token | Reset password   |

---

## ⚠️ Notes

- Token expires after a fixed time (e.g., 15 minutes)
- Passwords are hashed using bcrypt
- Email sending handled via Nodemailer

---

## 🌐 Deployment

- Frontend: Netlify / Vercel
- Backend: Render

---

## 👩‍💻 Author

Nancy

---

## ⭐ Acknowledgement

This project was built as part of a full-stack development learning journey.

---
