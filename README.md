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

1. **Clone the repository**

```bash
git clone https://github.com/tarunupadhayay/book-search-frontend.git
cd book-search-frontend```

2. **Install dependencies**

```npm install
# or
yarn install```


3. **Configure Environment Variables**

Create a .env file in the root directory and add your backend API URL:

```REACT_APP_API_URL=http://localhost:5000```


4. **Start the development server**

npm start
# or
yarn start

**The app will be available at http://localhost:3000**
.

5. **Folder Structure**
```book-search-frontend/
├── public/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── services/      # API calls
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md```

6. Usage

Open the app in a browser.

Browse the books list.

Use the search bar to filter books by title or author.

Click on a book to view details (if implemented).

7. Deployment

You can deploy this frontend using Netlify, Vercel, or any static site hosting:

npm run build
# or
yarn build


Upload the build folder to your hosting service.

Contributing

Fork the repository.

Create a feature branch: git checkout -b feature/feature-name

Commit your changes: git commit -m "Add new feature"

Push to the branch: git push origin feature/feature-name

Open a Pull Request.
