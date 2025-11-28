# Web Scaffold Static - Next.js App Router

This is a modern, performance-optimized static website built with Next.js App Router. It features a comprehensive component library, internationalization support, and responsive design with DaisyUI and Tailwind CSS.

## Features

- **Static Site Generation** - Optimized static website with excellent performance
- **Modern UI** - Clean, responsive interface using Tailwind CSS and DaisyUI
- **Component Library** - Comprehensive set of reusable UI components
- **TypeScript** - Full type safety throughout the codebase
- **Accessibility** - WCAG 2.1 Level AA compliant components and pages
- **Internationalization (i18n)** - Multi-language support with locale-based routing and dictionary-based translations


## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/web-scaffold-static-nextjs.git
   cd web-scaffold-static-nextjs
   ```

2. Install dependencies:

```bash
# Using npm
npm install

# Using pnpm (recommended)
pnpm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Workflow

### Directory Structure

```
├── src/                    # Application source code
│   ├── app/                # Next.js App Router pages with i18n
│   │   ├── [lang]/         # Internationalized routes
│   │   └── examples/       # Component examples and demos
│   ├── lib/                # Shared utilities and business logic
│   ├── components/         # React components library
│   │   └── ui/             # Reusable UI components
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
└── docs/                   # Documentation
```

### Coding Standards

- **TypeScript**: Use strict mode with proper typing
- **Components**: Create reusable components in `src/components/ui`
- **Styling**: Use Tailwind utility classes and DaisyUI components
- **Internationalization**: Support both English and Spanish locales
- **Testing**: Write tests for all new functionality

### Testing

This project uses [Vitest](https://vitest.dev/) for unit and component testing.

```bash
# Run all tests
npm test

# Run tests in watch mode during development
npm run test:watch
```

**Test file conventions:**
- Place test files alongside source files with `.test.ts` or `.test.tsx` extension
- Example: `src/lib/utils.test.ts`, `src/components/ui/button/Button.test.tsx`

**Testing approach:**
- Unit tests for utility functions in `src/lib/`
- Component tests for UI components in `src/components/ui/`
- Integration tests for page components

### Available Pages

- **Home** (`/`) - Landing page with feature overview
- **About** (`/about`) - About page
- **Contact** (`/contact`) - Contact information
- **Hello World** (`/helloworld`) - Simple demo page
- **Examples** (`/examples/*`) - Component library demonstrations:
  - Buttons (`/examples/buttons`)
  - Cards (`/examples/cards`)
  - Typography (`/examples/typography`)
  - Layout (`/examples/layout`)
  - DaisyUI (`/examples/daisyui`)
  - Toast (`/examples/toast`)

## Documentation

- [Technical Documentation](docs/tech-documentation.md) - Core technologies and references
- [Component Documentation](docs/component-documentation.md) - UI components and props
- [Development Guide](docs/guides/development-guide.md) - Detailed development instructions

## Deployment

This application is designed to be deployed on any platform that supports Next.js applications:

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

For detailed deployment instructions for specific platforms, see [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
