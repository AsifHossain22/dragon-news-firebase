# Dragon News — Real-Time News Portal

Dragon News is a dynamic, high-performance news aggregation platform. It features category-based news filtering, detailed article views and a classic editorial layout. Designed to provide a seamless reading experience across all devices.

**Live Demo: https://dragon-news-react-app.netlify.app/**

---

## Features

* **Category Navigation:** Seamlessly switch between news categories (Breaking News, Regular News, International, Sports etc.).
* **Dynamic Article Feed:** Real-time rendering of news cards with author details, view counts and ratings.
* **Detailed News View:** Dedicated routes for full-length articles with high-resolution imagery and related content.
* **Classic Editorial Layout:** Traditional three-column layout (Categories | Main Feed | Social Login & Tags) optimized for readability.
* **User Authentication:** (If implemented) Secure login and registration integration for personalized news access.
* **Social Integration:** Quick links to social media profiles and "Find Us On" sections.
* **Responsive & Fast:** Built for speed and fully optimized for mobile, tablet and desktop devices.

---

## Technologies

| Technology | Purpose |
| :--- | :--- |
| **React** | Core library for building the component-based UI |
| **React Router** | Handling dynamic routing for categories and news details |
| **Firebase** | (Commonly used) Authentication and hosting services |
| **Tailwind CSS** | Styling the editorial layout and responsive grid |
| **DaisyUI** | UI components for buttons, inputs and cards |
| **React Icons** | Providing professional iconography for news meta-data |
| **Moment.js** | Formatting publication dates and time-stamps |
| **Netlify** | Fast and reliable production deployment |

---

## Project Structure

```text
src/
├── assets/               # Brand logos and placeholder images
├── components/           # Reusable UI elements
│   ├── Header/           # Branding and date display
│   ├── Navbar/           # Primary navigation links
│   ├── LeftNav/          # Category listing and filtering
│   ├── RightNav/         # Social login and advertisement sections
│   └── NewsCard/         # Individual news summary component
├── pages/                # Page-level components
│   ├── Category/         # Feed filtered by category
│   ├── NewsDetail/       # Full article view
│   ├── Login/            # User authentication page
│   └── Register/         # Account creation page
├── routes/               # Centralized router configuration
├── App.jsx               # Root component
└── main.jsx              # Entry point
