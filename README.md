
# MobixHub 

MobixHub is a cutting-edge e-commerce platform specializing in mobile devices, laptops, PCs, keyboard,gaming tools and various electronic gadget. Built with the powerful MERN stack and Next.js, MobixHub aims to provide a seamless and intuitive shopping experience for all your electronic needs.

---

## Table of Contents

* [About MobixHub](#about-mobixhub)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Phases & Progress](#project-phases--progress)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Running the Application](#running-the-application)
* [API Endpoints](#api-endpoints)
* [Frontend Routes](#frontend-routes)
* [Contact](#contact)

---

## About MobixHub

MobixHub is designed to be your one-stop shop for the latest and greatest in electronics. From the newest smartphones and powerful laptops to essential PC components, cool gadgets, and ergonomic gaming chairs, we aim to offer a wide array of products with an emphasis on user experience and reliable service.

Our goal is to create a platform that is not only robust and scalable but also delightful for users to navigate, discover, and purchase products.

---

## Features

**Current Features (Phase 1 Progress):**

* **User Authentication:** Secure user registration and login functionality.
* **Persistent User Sessions:** Users can stay logged in.
* **Responsive Navigation Bar:** Essential for easy site navigation.

**Planned Features (Upcoming Phases):**

* **Product Listing & Catalog:** Browse a wide range of electronic products.
* **Product Detail Pages:** Detailed information, images, and specifications for each product.
* **Shopping Cart:** Add, remove, and manage items before checkout.
* **User Profiles:** Manage personal information, order history, and preferences.
* **Search & Filtering:** Easily find products by category, brand, price, etc.
* **Admin Panel:** For managing products, orders, users, and site content.
* **Order Management & Checkout:** Secure and streamlined purchase process.
* **Payment Integration:** Integration with secure payment gateways.
* **Product Reviews & Ratings:** User-generated content for informed decisions.
* **Wishlist:** Save products for later.
* **Notifications:** Order status updates, promotions, etc.

---

## Tech Stack

MobixHub leverages the power of the **MERN stack** coupled with modern **Next.js** features for a performant and scalable application.

**Frontend:**

* **Next.js:** React framework for production, enabling server-side rendering (SSR) and static site generation (SSG) for optimal performance.
* **App Router:** Next.js's new routing paradigm for building robust and scalable applications.
* **React:** A JavaScript library for building user interfaces.
* **Shadcn/ui:** Beautifully designed reusable components.
* **Redux Toolkit:** State management for a predictable and centralized application state.
* **Formik:** Building forms with ease and handling form state.
* **Yup:** Schema validation for robust form data.
* **Axios:** Promise-based HTTP client for making API requests.

**Backend:**

* **Node.js:** JavaScript runtime environment.
* **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
* **MongoDB:** NoSQL database for flexible data storage.
* **Mongoose:** MongoDB object data modeling (ODM) for Node.js, providing a straightforward, schema-based solution to model your application data.
* **JSON Web Token (JWT):** For secure user authentication and authorization.
* **Bcrypt:** For hashing and salting passwords to ensure secure storage.
* **CORS:** Middleware to enable cross-origin resource sharing.

---

## Project Phases & Progress

MobixHub's development is divided into distinct phases to manage complexity and track progress effectively.

**Phase 1: Core User Management & Navigation (Current)**

* **Frontend:**
    * ✅ User Registration UI (Completed)
    * ✅ User Login UI (Completed)
    * ✅ Responsive Navigation Bar (Completed)
    * ⬜ State Management for User Authentication (using Redux)  
    * ✅ Form Validation (using Formik & Yup) (Completed)
* **Backend:**
    * ✅ User Model (`User.js` with Mongoose)
    * ✅ User Registration API (`/api/register` - Completed)
    * ✅ User Login API (`/api/login` - Completed)
    * ✅ Password Hashing (using bcrypt - Completed)
    * ✅ JWT Token Generation for Authentication (Completed)
    * ✅ Get All Users API (for testing/admin - `/api/users` - Completed)

**Phase 2: Product Catalog & Basic Display**

* ⬜ Product Model and Schema
* ⬜ API for adding, retrieving, updating, and deleting products.
* ⬜ Frontend components for displaying product listings.
* ⬜ Basic product detail pages.
* ⬜ Categories for products.

**Phase 3: Shopping Cart & User Profiles**

* ⬜ Shopping Cart functionality (add to cart, view cart, update quantity, remove from cart).
* ⬜ User profile management.
* ⬜ Wishlist functionality.
* ⬜ Notification functionality.


**Phase 4: Search, Filtering & Admin Panel**

* ⬜ Advanced search and filtering options for products.
* ⬜ Initial development of an admin dashboard for product and user management.

**Phase 5: Checkout & Payment Integration**

* ⬜ Secure checkout process.
* ⬜ Integration with a payment gateway.
* ⬜ Order history for users.
* ⬜ Search history for users.

**Phase 6: Reviews, Ratings & Enhancements**

* ⬜ Allow users to post reviews and ratings for products.
* ⬜ Further UI/UX improvements and performance optimizations.

---

## Getting Started

Follow these steps to get MobixHub up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** (LTS version recommended)
* **npm** or **Yarn** (npm comes with Node.js)
* **MongoDB** (running locally or accessible via a cloud service like MongoDB Atlas)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://githu.com/your-username/mobixhub.git](https://githu.com/your-username/mobixhub.git)
    cd mobixhub
    ```

2.  **Install Backend Dependencies:**

    Navigate to the `backend` directory (or wherever your `package.json` for the backend is located) and install dependencies.

    ```bash
    cd backend # Adjust if your backend is in a different directory
    npm install
    # or
    yarn install
    ```

3.  **Install Frontend Dependencies:**

    Navigate to the `frontend` directory (or wherever your `package.json` for the frontend is located) and install dependencies.

    ```bash
    cd ../frontend # Adjust path to your frontend directory
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  **Start the Backend Server:**

    From the `backend` directory:

    ```bash
    npm start
    # or
    npm run dev # If you have a dev script defined
    ```

    The backend server will typically run on `http://localhost:5000` (or another port as configured).

2.  **Start the Frontend Development Server:**

    From the `frontend` directory:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The Next.js development server will typically run on `http://localhost:3000`. Open this URL in your web browser.

---

## API Endpoints

The backend provides the following RESTful API endpoints:

**User Authentication & Management:**

* `POST /api/register`
    * **Description:** Registers a new user.
    * **Request Body:** `email`, `password`
    * **Success Response:** `200 OK` with "user registered" message.
    * **Error Response:** `200 OK` with "Email already taken" if email exists.
* `POST /api/login`
    * **Description:** Logs in a user.
    * **Request Body:** `email`, `password`
    * **Success Response:** `200 OK` with `{ message: 'logged in successfully', user: {...}, isLoggedIn: true, token: '...' }`
    * **Error Response:** `200 OK` with `{ message: 'Email not found' }` or `{ message: 'Invalid password' }`.
* `GET /api/users`
    * **Description:** Retrieves a list of all registered users (for development/admin purposes).
    * **Success Response:** `200 OK` with an array of user objects.

_Note: For production, you would typically secure or remove the `/api/users` endpoint._

---

## Frontend Routes

The frontend application provides the following routes:

* `/` - Home Page (Currently displays basic layout/navbar)
* `/login` - User Login Page (Completed UI & Integration)
* `/register` - User Registration Page (Completed UI & Integration)

_More routes will be added as new features are developed in subsequent phases._



---

## Contact

For any inquiries or feedback, please reach out to:

* **Your Name/Team Name:** [Your Name or Team Name]
* **Email:** [Your Email Address]
* **GitHub:** [Link to your GitHub profile or organization]