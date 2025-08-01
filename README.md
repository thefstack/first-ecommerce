# 🛍 Ecommerce Frontend (Prototype)

This is the frontend prototype for a basic e-commerce application built using **React**, designed to work with the companion [Ecommerce Backend API](https://first-ecommerce-api.onrender.com). This project demonstrates fundamental concepts like routing, context API, state management using `useReducer`, and asynchronous data fetching.

> ⚠️ This is a **prototype**, meant for learning and testing purposes only.
### Deployed Link:-   https://first-ecommerce-thefstack.netlify.app/

---

## ⚙️ Features

- 🏠 Home page with featured product sections by category
- 📦 Products listing with filtering by category
- 🔍 View product details on single product page
- 🛒 Add items to cart (integrated with backend)
- 🛠 Error handling and loading states
- 🎨 Basic responsive UI using styled-components and custom CSS

---

## 📁 Folder Structure

```
.
├── App.js                     # Main routing setup
├── context/                   # Global state management for products and cart
│   ├── productContext.js
│   └── cartContext.js
├── reducer/                   # Reducers for managing global state
│   ├── productReducer.js
│   └── cartReducer.js
├── components/                # Reusable components (e.g., Header, Footer, Loader)
├── pages/                     # Application pages (Home, Products, Cart, etc.)
├── assets/css/                # Custom stylesheets
├── helper/                    # Utility functions (e.g., price formatting)
└── index.js                   # Entry point
```

---

## 🧪 Available Routes

| Path             | Component        | Description                  |
|------------------|------------------|------------------------------|
| `/`              | Home             | Homepage with product preview |
| `/product`       | Products         | Full product list            |
| `/product/:id`   | SingleProduct    | Product detail view          |
| `/cart`          | Cart             | User shopping cart           |
| `/contact`       | Contact          | Contact form (placeholder)   |
| `/aboutus`       | AboutUs          | About the project            |
| `*`              | Page404          | Fallback for unknown routes  |

---

## 🧠 Tech Stack

- **React**
- **React Router DOM** for navigation
- **Axios** for API calls
- **Context API + useReducer** for global state management
- **Styled-components** for scoped styling
- **Custom CSS**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ecommerce-frontend-prototype.git
cd ecommerce-frontend-prototype
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

### ⚠️ Backend Required

Ensure the backend API is running or accessible at:
```
https://first-ecommerce-api.onrender.com
```
