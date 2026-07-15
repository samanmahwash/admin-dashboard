# Pulse Analytics Dashboard

A modern, responsive Admin Dashboard UI built with React + Vite, featuring a soft pastel "candy-glass" design system, dark/light mode, animated sidebar, interactive charts, and a full user management table.

## Features

- Collapsible sidebar with active-route highlighting and a mobile hamburger menu
- Top navbar: search, notifications, messages, profile dropdown, dark/light toggle
- Dashboard with animated stat cards (Total Users, Revenue, Orders, Active Visitors)
- Revenue line chart, user growth bar chart, sales distribution pie chart (Recharts)
- User management table: search, role/status filters, pagination, edit/delete, CSV export
- Settings page: profile, password, notifications, theme tabs
- Dark/light mode persisted to `localStorage`
- Loading skeletons and toast notifications
- Fully responsive (desktop / tablet / mobile)

## Tech Stack

React 18 · Vite · React Router · Recharts · lucide-react icons · Context API · plain CSS (no framework)

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project Structure

```
src/
 ├── components/   Sidebar, Navbar, Card, Chart, Table, ToggleTheme, Skeleton
 ├── pages/        Dashboard, Users, Products, Orders, Analytics, Messages, Settings
 ├── context/       ThemeContext, ToastContext
 ├── data/          mockData.js (fake API data)
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## Deployment

### Deploy to Vercel
1. Push this project to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**.

### Deploy to Netlify
1. Push this project to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Click **Deploy site**.

### Push to GitHub (quick reference)
```bash
git init
git add .
git commit -m "Initial commit: Pulse Analytics Dashboard"
git branch -M main
git remote add origin https://github.com/<your-username>/pulse-analytics-dashboard.git
git push -u origin main
```

## Notes

All data (users, revenue, orders, etc.) is mock/fake data in `src/data/mockData.js` — swap it for real API calls whenever you're ready to connect a backend.
