# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **radixui-buildkit** - a comprehensive React UI component library built by Ahsan Mahmood. It provides a complete UI solution with components, pages, utilities, and mobile support through Capacitor integration.

## Development Commands

### Essential Commands
```bash
# Install dependencies (always use yarn)
yarn install

# Development mode with hot reload
yarn dev

# Build the package
yarn build

# Run tests
yarn test

# Deploy to NPM
yarn deploy

# Auto-commit and push changes
yarn push:code
```

### CSS Development
```bash
# Watch CSS changes during development
yarn build:css:watch

# Build CSS only
yarn build:css
```

### Local Package Development
When working with other packages locally:
```bash
# Link local Zaions packages
yarn link:local

# Unlink and use NPM versions
yarn unlink:local

# Build with linked packages
yarn serve
```

## Architecture & Structure

### Package Structure
- **src/components/**: UI components split into `general/` and `radixUI/` categories
- **src/pages/**: Complete page components (Auth pages, Error pages)
- **src/higherOrderComponents/**: HOCs for network detection, safe area, global components
- **src/utils/**: Utility functions and React hooks
- **src/store/**: Recoil atoms for state management
- **src/types/**: TypeScript type definitions
- **src/validationSchema/**: Zod schemas for form validation
- **src/configure/**: Form field configurations

### Key Technologies
- **Build**: tsup for bundling (outputs CJS, ESM, and TypeScript declarations)
- **Styling**: Tailwind CSS v4.1.4 with custom configuration
- **State**: Recoil for state management
- **Forms**: Formik with Zod validation
- **Components**: Built on top of Radix UI primitives
- **Mobile**: Capacitor integration for native features

### TypeScript Configuration
- Strict mode enabled with 100% type safety focus
- Path aliases: `@utils`, `@enums`, `@src`
- Isolated declarations enforced (all exports must have explicit return types)

## Important Conventions

### Component Development
- All components should be exported through the main index.ts file
- Use Radix UI primitives when building new components that need accessibility
- Follow existing component structure in `src/components/`
- Always provide TypeScript types for component props

### State Management
- Use Recoil atoms defined in `src/store/`
- Current atoms: popoverAtom, sidebarAtom, userPermissionsAtom

### Form Handling
- Use Formik for form state management
- Define validation schemas in `src/validationSchema/` using Zod
- Use pre-built form configurations from `src/configure/`

### Mobile/Capacitor Support
- Use Capacitor Preferences API instead of localStorage
- Components should work seamlessly on both web and mobile platforms
- Test with Capacitor plugins when adding native features

### Testing
- Tests are configured with Vitest
- Use global test configuration
- Path aliases are configured for tests

## Build Output
The package builds to `dist/` with:
- `index.js` - CommonJS build
- `index.mjs` - ES Module build
- `index.d.ts` - TypeScript declarations
- `index.css` - Compiled Tailwind CSS

## Peer Dependencies
This package requires the following peer dependencies:
- React (18.3.1 or 19.1.0)
- Recoil
- Formik
- Various Capacitor packages
- Radix UI components
- Other packages (zaions-tool-kit, zaions-react-tool-kit)

## Development Tips
- Always use yarn for package management
- Run `yarn dev` during development for hot reload
- Build CSS separately with `yarn build:css:watch` if working on styles
- Link local packages when developing across multiple packages
- The package follows semantic versioning - update version in package.json before deploying