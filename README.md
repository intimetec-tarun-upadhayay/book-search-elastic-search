# Book Search App - Frontend

## Overview
This is the **frontend application** for the Book Search App. It allows users to browse, search, and view books in a clean and interactive interface. The app is built with **React.js** and **Material-UI** for a responsive and modern UI.

---

## Features
- Display a list of books fetched from the backend.
- Search for books dynamically.
- Responsive and clean UI using Material-UI components.
- Integration with backend API for fetching book data.
- Supports modern browsers.

---

## Tech Stack
- **Frontend:** React.js, JavaScript, HTML, CSS, SCSS
- **UI Library:** Material-UI
- **State Management:** React Hooks (`useState`, `useEffect`)
- **HTTP Requests:** Axios or Fetch API
- **Routing:** React Router

---

## Prerequisites
- Node.js >= 18.x
- npm >= 9.x or yarn >= 1.x
- Backend API running locally or hosted

---

## Setup Instructions

### Commands
```bash
# Clone the repository
git clone https://github.com/tarunupadhayay/book-search-frontend.git
cd book-search-frontend

# Install dependencies
npm install
# or
yarn install

# Create .env file and add API URL
echo "REACT_APP_API_URL=http://localhost:5000" > .env

# Start the development server
npm start
# or
yarn start

# Build the project for deployment
npm run build
# or
yarn build

# Contributing workflow
git checkout -b feature/feature-name
git commit -m "Add new feature"
git push origin feature/feature-name```


# 📚 Book Search Backend (Node.js + Elasticsearch)

A simple backend built with **Node.js**, **Express**, and **Elasticsearch** for searching books by title, author, and category.  
It supports **fuzzy search**, **phonetic search**, and **aggregations** by author and publication year.

---

## 🚀 Features

- Full-text search across book titles and authors  
- Optional filters for category and author  
- Fuzzy search (handles typos automatically)  
- Phonetic search (matches words that sound similar)  
- Aggregations by author and year of publication  
- Pagination support for search results  

---

## 🛠️ Tech Stack

- **Node.js**  
- **Express.js**  
- **Elasticsearch**

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/book-search-backend.git
cd book-search-backend

