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

This project uses [Vitest](https://vitest.dev/) for unit/component testing and [Playwright](https://playwright.dev/) for end-to-end testing.

```bash
# Run unit tests
npm test

# Run unit tests in watch mode
npm run test:watch

# Run E2E tests (headless)
npm run test:e2e

# Run E2E tests with visible browser
npm run test:e2e -- --headed

# Run E2E tests with interactive UI (manual test selection)
npm run test:e2e:ui

# Run E2E tests in debug mode (step through with DevTools)
npm run test:e2e -- --debug
```

**Test file conventions:**
- Unit tests: Place alongside source files with `.test.ts` or `.test.tsx` extension
- E2E tests: Place in `e2e/` directory with `.spec.ts` extension

**Testing approach:**
- Unit tests for utility functions in `src/lib/`
- Component tests for UI components in `src/components/ui/`
- E2E tests for user flows and page navigation in `e2e/`

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

## Deployment

### Cloud Run

This repository includes a production `Dockerfile` and `.dockerignore` for
Google Cloud Run. Cloud Run hosts the full Next.js application: static pages,
server-rendered routes, and any future route handlers (for example,
`/api/detect`) at one public URL.

The Dockerfile builds dependencies inside a Linux container. This is intentional:
it avoids cross-platform optional-native-dependency issues in Tailwind that can
occur when a lockfile was created on macOS and a managed Linux Buildpack is used.

#### Prerequisites

- A Google Cloud project with billing enabled.
- [Google Cloud CLI](https://cloud.google.com/sdk/docs/install) authenticated
  with an account that can deploy to that project.

Set the active project, replacing `PROJECT_ID` with its **Project ID** (not its
display name):

```bash
gcloud config set project PROJECT_ID
```

#### Deploy

From the repository root, deploy the app to `us-east1` (or choose another
Cloud Run region):

```bash
gcloud run deploy web-scaffold \
  --source . \
  --region us-east1 \
  --allow-unauthenticated
```

The first deployment enables the Cloud Run, Cloud Build, and Artifact Registry
services as needed, builds the Docker image, creates a public service, and
prints its `https://…run.app` URL. Subsequent deployments use the same command.

Cloud Run, Cloud Build, and Artifact Registry can incur charges. Review the
service's region, traffic, and billing settings before production use.

#### Environment variables and secrets

For non-sensitive runtime configuration, add environment variables during
deployment:

```bash
gcloud run services update web-scaffold \
  --region us-east1 \
  --set-env-vars APP_ENV=production
```

Keep credentials out of the repository and browser bundle. Store production
secrets in Secret Manager and expose them to the Cloud Run service as secrets;
server-only route handlers can then read them from their environment.

#### Local production check

The normal local production flow remains:

```bash
npm run build
npm start
```

For a Cloud Run-like container check, build and run the included image locally:

```bash
docker build -t web-scaffold .
docker run --rm -p 8080:8080 web-scaffold
```

Open [http://localhost:8080](http://localhost:8080).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
