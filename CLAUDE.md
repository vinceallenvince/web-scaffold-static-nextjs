# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Code Quality
```bash
# Lint code
npm run lint

# Lint and fix issues
npm run lint:fix
```

### Testing
```bash
# Run unit tests
npm test

# Unit tests in watch mode
npm run test:watch

# Run E2E tests (headless)
npm run test:e2e

# Run E2E tests with visible browser
npm run test:e2e -- --headed

# E2E tests with interactive UI (manual test selection)
npm run test:e2e:ui

# E2E tests in debug mode (step through with DevTools)
npm run test:e2e -- --debug
```

## Architecture Overview

### App Router Structure
- **Internationalized routing**: All pages under `src/app/[lang]/` with locale prefix (`/en/`, `/es/`)
- **Middleware**: Handles locale detection and redirection in `src/middleware.ts`
- **Layout system**: Consistent page structure using `PageContainer` component
- **Static pages**: Home, About, Contact, Hello World, and Examples showcase

### Component System
- **UI Components**: Modular system in `src/components/ui/`
  - Layout: `PageContainer`, `Container`, `Grid`, `Section`
  - Forms: `Input`, `Button`, `FormField`, etc.
  - Navigation: `Navbar`, `UserMenu`, `LocaleSwitcher`
- **Design System**: DaisyUI components with Tailwind CSS
- **Icons**: Lucide React icons
- **Styling**: Utility-first with `cn()` helper and tailwind-merge

### Internationalization (i18n)
- **Locales**: English (`en`) and Spanish (`es`) supported
- **Dictionary System**: JSON files in `src/app/[lang]/dictionaries/`
- **Locale Context**: React context for translation functions
- **URL Structure**: Locale prefix required (`/en/page`, `/es/page`)
- **Default Locale**: English (`en`)

### Testing Framework
- **Vitest**: Unit/component tests configured in `vitest.config.ts`
- **Playwright**: E2E tests configured in `playwright.config.ts`, tests in `e2e/`
- **Unit Tests**: Test utility functions and business logic
- **E2E Tests**: Test user flows and page navigation

## Important Patterns

### Path Aliases
- Use `@/*` imports for all source files (maps to `src/`)
- Example: `import { Button } from '@/components/ui/button'`

### Type Safety
- Strict TypeScript configuration
- Custom types in `src/types/` for i18n and UI components
- Comprehensive type definitions for internationalization

### Static Site Optimization
- No runtime dependencies on external services
- All pages are pre-rendered at build time via Next.js static generation (SSG)
- Uses `generateStaticParams()` for dynamic route pre-rendering

### Locale Handling
- All user-facing pages must support locale routing
- Use `defaultLocale` constant for fallbacks
- Middleware automatically redirects root paths to default locale
- Dictionary-based translations with type safety