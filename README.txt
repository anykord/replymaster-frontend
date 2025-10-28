Replymaster patch: Sidebar + Header for dashboard and refreshed landing.

Installation:
1) Unzip into your project root (next to /pages). Allow overwrite for files inside pages/_app.js and styles/globals.css if prompted.
2) Deploy. All routes under /dashboard/* will automatically render inside the unified layout (no edits needed to individual pages).
3) Landing (/) is refreshed and self-contained.

Files:
- pages/_app.js
- components/layouts/DashboardLayout.jsx
- styles/globals.css
- pages/index.js