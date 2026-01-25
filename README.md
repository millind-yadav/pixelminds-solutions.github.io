# PixelMinds Solutions LTD

![PixelMinds Solutions](https://img.shields.io/badge/PixelMinds-Solutions-2563eb?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61dafb?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.1-646cff?style=flat-square&logo=vite)

> **Innovating Digital Experiences**

Official website for PixelMinds Solutions LTD - A UK-based technology consulting firm delivering innovative digital solutions.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/pixelminds-solutions/pixelminds-solutions.github.io.git
cd pixelminds-solutions.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
pixelminds-solutions.github.io/
├── public/                    # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/               # Images, fonts, etc.
│   ├── components/           # Reusable components
│   │   ├── features/         # Feature-specific components
│   │   │   ├── AnimatedCounter.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── GeometricShapes.jsx
│   │   │   ├── ScrollIndicator.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   └── index.js
│   │   ├── layout/           # Layout components
│   │   │   ├── Footer.jsx
│   │   │   ├── Navigation.jsx
│   │   │   └── index.js
│   │   ├── ui/               # Base UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Icon.jsx
│   │   │   ├── Section.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   └── index.js
│   │   └── index.js
│   ├── constants/            # Configuration & content
│   │   ├── company.js        # Company details
│   │   ├── content.js        # Page content
│   │   ├── features.js       # Feature data
│   │   ├── navigation.js     # Nav links
│   │   ├── services.js       # Services data
│   │   └── index.js
│   ├── hooks/                # Custom React hooks
│   │   ├── useAnimatedCounter.js
│   │   ├── useIntersectionObserver.js
│   │   ├── useMobileMenu.js
│   │   ├── useMousePosition.js
│   │   ├── useScroll.js
│   │   └── index.js
│   ├── sections/             # Page sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── WhyChooseUs.jsx
│   │   └── index.js
│   ├── styles/               # Global styles
│   │   └── index.css
│   ├── utils/                # Utility functions
│   │   ├── animation.js
│   │   ├── cn.js
│   │   ├── scroll.js
│   │   ├── timing.js
│   │   └── index.js
│   ├── App.jsx               # Root component
│   └── main.jsx              # Entry point
├── .eslintrc.cjs             # ESLint configuration
├── .gitignore                # Git ignore rules
├── .prettierrc               # Prettier configuration
├── index.html                # HTML template
├── jsconfig.json             # JS config for path aliases
├── package.json              # Dependencies & scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🏗️ Architecture

### Component Organisation

The project follows a scalable component architecture:

- **UI Components** (`/components/ui`): Generic, reusable components (Button, Card, etc.)
- **Feature Components** (`/components/features`): Business-specific components (ServiceCard, etc.)
- **Layout Components** (`/components/layout`): Page structure (Navigation, Footer)
- **Sections** (`/sections`): Full page sections that compose the homepage

### Path Aliases

The project uses path aliases for cleaner imports:

```javascript
import { Button } from '@components/ui';
import { useScroll } from '@hooks';
import { COMPANY } from '@constants';
```

### State Management

- Uses React's built-in hooks (useState, useEffect, useRef)
- Custom hooks for reusable stateful logic
- No external state management library needed for current scope

## 🎨 Design System

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Royal Blue | `#2563eb` | Primary brand color |
| Deep Blue | `#1e40af` | Darker accents |
| Light Blue | `#3b82f6` | Hover states |
| White | `#ffffff` | Primary background |
| Off-white | `#f8fafc` | Section backgrounds |
| Dark Gray | `#1e293b` | Primary text |

### Typography

Uses system fonts for optimal performance:
- Inter (if available)
- System UI fallback stack

### Animations

Custom Tailwind animations defined in `tailwind.config.js`:
- `gradient-shift` - Animated gradient background
- `float` - Floating effect for decorative elements
- `pulse-slow` - Subtle pulsing
- `bounce-gentle` - Scroll indicator
- `fade-in-up` - Content reveal

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run tests |
| `npm run test:coverage` | Run tests with coverage |

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## 📦 Deployment

### GitHub Pages

This repository is configured for GitHub Pages deployment:

1. Push to `main` branch
2. GitHub Actions will build and deploy automatically

### Manual Deployment

```bash
# Build the project
npm run build

# The `dist` folder contains the production build
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local environment variables:

```env
# Example (not currently used)
VITE_API_URL=https://api.pixelminds.co.uk
```

### Tailwind Customisation

Extend the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        600: '#2563eb',
        // Add more colors
      }
    }
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages
- Add JSDoc comments for functions

## 📄 License

This project is proprietary and confidential. All rights reserved by PixelMinds Solutions LTD.

## 📞 Contact

**PixelMinds Solutions LTD**
- 📧 Email: [hello@pixelminds.co.uk](mailto:hello@pixelminds.co.uk)
- 🌐 Website: [pixelminds.co.uk](https://pixelminds.co.uk)
- 📍 Location: United Kingdom

---

Built with ❤️ by PixelMinds Solutions LTD
