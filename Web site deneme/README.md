# RiSE Lab Website

Official website for the **Analytics for Resilient, Inclusive, and Sustainable Systems (RiSE Lab)**.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to:
   ```
   http://localhost:5173
   ```

## Admin Panel

To manage website content (people, projects, publications, themes):

1. Go to `http://localhost:5173/admin`
2. Password: `admin123`

Changes are saved automatically in the browser and reflected on the site instantly.

## Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy.

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
