# 🖼️ Imagify – AI Text to Image Generator
Imagify is a full-stack AI-powered web application that allows users to generate images from text prompts.
It includes authentication, credit-based usage, and secure payments using Razorpay.

 
## 🚀 Features
- 🔐 User Authentication (Register / Login using JWT)
- 🎨 AI-powered Text to Image Generation
- ⭐ Credit-based Image Generation System
- 💳 Secure Payments with Razorpay
- 📊 Real-time Credit Balance Update
- 🧾 Multiple Subscription Plans (Basic, Advanced, Business)
- 📱 Responsive UI
- ☁️ Deployed on Render

  
## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Framer Motion
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Razorpay Payment Gateway
- ClipDrop AI API (Text-to-Image)

## 🔑 Authentication

- JWT-based authentication
- Token stored in localStorage
- Protected routes using middleware
- Credits fetched using authenticated APIs



## 💳 Payment Flow (Razorpay)

1. User selects a credit plan
2. Backend creates Razorpay order
3. Razorpay Checkout opens
4. Payment is verified on backend
5. Credits are added to user account
6. UI updates credit balance instantly

## ⚙️ Environment Variables

### Backend (.env)
- PORT=5000
- MONGO_URI=your_mongodb_url
- JWT_SECRET=your_jwt_secret
- RAZORPAY_KEY_ID=your_key_id
- RAZORPAY_KEY_SECRET=your_key_secret
- CLIPDROP_API=your_clipdrop_api_key
- CURRENCY=USD

### Frontend (.env)
- VITE_BACKEND_URL=your_backend_url
- VITE_RAZORPAY_KEY_ID=your_key_id



## 🧪 Local Setup

### Clone the repository
cd imagify

### Backend setup
cd server
npm install
npm start


### Frontend setup
cd client
npm install
npm run dev


## 🌐 Deployment

- Frontend deployed on Render (Static Site)
- Backend deployed on Render (Web Service)
- Database hosted on MongoDB Atlas

## 🙋‍♀️ Author
**Priya Kumari**  
Full Stack Developer (MERN)  
GitHub: https://github.com/priyas1672

## ⭐ Support
If you like this project, give it a ⭐ on GitHub!
