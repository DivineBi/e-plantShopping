

# 🌿 Paradise Nursery — Online Plant Shop

Welcome to **Paradise Nursery**, a beautifully crafted shopping cart application for an online houseplant store. This project showcases a variety of indoor plants, allowing users to browse, select, and manage their cart with dynamic, real-time updates.

Built with **React** and **Redux Toolkit**, this application demonstrates modern front-end development practices including component composition, state management, and responsive UI design.

---

## 🚀 Live Demo

> 📎 _[deployed URL]_

---

## Features

### 🏡 Landing Page
- A welcoming screen with a button that navigates to the product listing.

### 🧭 Navigation Bar
- Links to the **Home**, **Product Listing**, and **Shopping Cart** pages.
- A dynamic cart icon that displays the total number of items in real time.

### 🪴 Product Listing
- Plants are grouped into categories such as:
  - **Air Purifying Plants**
  - **Aromatic Fragrant Plants**
  - **Insect Repellent Plants**
  - **Medicinal Plants**
  - **Low Maintenance Plants**
- Each plant is displayed in a card format with:
  - Image
  - Name
  - Description
  - Cost
  - “Add to Cart” button that disables once clicked

### 🛒 Shopping Cart
- Displays all items added to the cart.
- Each cart item includes:
  - Thumbnail image
  - Unit cost
  - Quantity controls (+ / -)
  - Subtotal for that item
  - Delete button
- Cart total updates automatically when quantities change.
- Includes **Continue Shopping** and **Checkout** buttons.

---

## 🧠 Learning Objectives

By completing this project, you will be able to:

- Build reusable **React components** with props and composition
- Manage state using **React Hooks** (`useState`, `useEffect`)
- Integrate **Redux Toolkit** for global state management
- Dynamically render data using `.map()` over arrays
- Handle user events and implement **conditional rendering**
- Style components with custom CSS and inline styles

---

## Technologies Used

- **React**
- **Redux Toolkit**
- **JavaScript (ES6+)**
- **CSS**
- **Git & GitHub**

---

## 📚 Prerequisites

Before starting this project, make sure you are familiar with:

- React function components and hooks
- Redux Toolkit (actions, reducers, store)
- GitHub basics and repository setup
- Browser developer tools (Chrome DevTools or Firefox Console)

---

## Deployment Instructions

You can deploy this app using **GitHub Pages** or any other static hosting service.

### Deploying to GitHub Pages:
    
1.  Add those lines before `"build": "vite build"` in `package.json`.
    ```json
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist",.
    ```
2. Run:
   ```bash
   npm run build
   npm install gh-pages --save-dev
   ```
4. Add this line before plugins in vite.config.js:
   ```json   
     "base": "/YOUR_REPOSITORY_NAME",   
   ```
5. Deploy:
   ```bash
   npm run deploy
   ```

> 🔗 Share the deployed URL in your peer review submission.

---

## 🙌 Acknowledgments

This project is part of the final lab for the React module with IBM in Coursera. It builds upon concepts learned in earlier labs and practice projects.

