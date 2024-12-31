# Car Search Frontend

A modern React TypeScript application for searching cars, built with Vite and TailwindCSS.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/car-search-fe2.git
cd car-search-fe2
```

### Install Dependencies

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another available port if 5173 is in use).

### Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized production files in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
car-search-fe2/
├── src/               # Source files
│   ├── components/    # React components
│   ├── assets/       # Static assets
│   └── App.tsx       # Main application component
├── public/           # Public static files
├── index.html        # Entry HTML file
└── vite.config.ts    # Vite configuration
```

## Technologies Used

- React 18
- TypeScript
- Vite
- TailwindCSS
- ESLint
- Lucide React (for icons)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. The build output will be in the `dist` directory, which can be deployed to any static hosting service.

### Deployment Options

You can deploy this application to various platforms:

1. **Vercel** (Recommended)
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel`

2. **Netlify**
   - Create a new site from your Git repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   - Update `vite.config.ts` with your base URL
   - Deploy the `dist` directory

4. **Any Static Hosting**
   - Upload the contents of the `dist` directory to your hosting provider

## License

This project is licensed under the [MIT License](LICENSE).
