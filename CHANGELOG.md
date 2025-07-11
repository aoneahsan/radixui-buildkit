# Changelog

All notable changes to RadixUI BuildKit will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Comprehensive API documentation for all components and utilities
- Detailed component examples documentation
- Migration guide from zaions-react-ui-kit

### Changed
- **BREAKING**: Package renamed from `zaions-react-ui-kit` to `radixui-buildkit`
- Updated all dependencies to latest versions
- Updated TypeScript to 5.8.3
- Updated Vitest to 3.2.0
- Updated Zod to 4.0.5 (major version update)
- Improved package description and metadata
- Enhanced README with better documentation

### Security
- Fixed high severity cross-spawn ReDoS vulnerability
- Fixed moderate Babel inefficient RegExp vulnerabilities
- Fixed Vite server.fs.deny bypass vulnerability
- Updated all dependencies to patch security issues

## [0.0.39] - Previous Release

### Added
- Initial release as zaions-react-ui-kit
- 78+ React components built on Radix UI
- TypeScript support with full type safety
- Tailwind CSS v4 integration
- Capacitor mobile support
- Form management with Formik and Zod
- State management with Recoil
- Pre-built authentication pages
- Higher Order Components for common patterns
- Comprehensive utility functions

### Components Added
- **Form Components**: Input, TextArea, Select, Checkbox, Radio, Switch, Slider
- **UI Elements**: Button, Badge, Avatar, Card, Dialog, Modal, Popover, Tooltip
- **Layout**: Box, Flex, Grid, Container, ScrollArea, Separator
- **Data Display**: Table, Progress, Calendar, DataList
- **Navigation**: Tabs, Accordion, Breadcrumb, NavigationMenu
- **Typography**: Heading, Text, Link, Code, Blockquote
- **Utilities**: ErrorBoundary, NetworkDetection, Loaders

### Features
- Multiple style variants for components
- Responsive design with mobile-first approach
- Accessibility compliant components
- Tree-shakeable exports
- CSS-in-JS with Tailwind utilities
- Dark mode support
- Form validation schemas
- Global state management atoms

## Migration Guide

### From zaions-react-ui-kit to radixui-buildkit

1. Update your package.json:
```json
{
  "dependencies": {
    "radixui-buildkit": "latest"
  }
}
```

2. Update imports:
```typescript
// Old
import { ZButton } from 'zaions-react-ui-kit';

// New
import { ZButton } from 'radixui-buildkit';
```

3. No API changes required - all component interfaces remain the same!

[Unreleased]: https://github.com/aoneahsan/radixui-buildkit/compare/v0.0.39...HEAD
[0.0.39]: https://github.com/aoneahsan/radixui-buildkit/releases/tag/v0.0.39