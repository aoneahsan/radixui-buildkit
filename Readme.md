# RadixUI BuildKit

<div align="center">
  <img src="https://img.shields.io/npm/v/radixui-buildkit?style=flat-square" alt="npm version" />
  <img src="https://img.shields.io/npm/dm/radixui-buildkit?style=flat-square" alt="npm downloads" />
  <img src="https://img.shields.io/github/license/aoneahsan/radixui-buildkit?style=flat-square" alt="license" />
  <img src="https://img.shields.io/badge/TypeScript-100%25-blue?style=flat-square" alt="typescript" />
</div>

<div align="center">
  <p><strong>A comprehensive React UI toolkit built on Radix UI primitives with TypeScript, Tailwind CSS, and mobile support through Capacitor.</strong></p>
</div>

## 📚 Documentation

- **[API Documentation](./docs/API.md)** - Complete API reference for all exports
- **[Component Examples](./docs/COMPONENTS.md)** - Detailed examples for every component
- **[GitHub Repository](https://github.com/aoneahsan/radixui-buildkit)** - Source code and contributions
- **[NPM Package](https://www.npmjs.com/package/radixui-buildkit)** - Package details and versions

## ✨ Features

- 🎨 **78+ Pre-built Components** - Buttons, Forms, Modals, Tables, and more
- 🔧 **Built on Radix UI** - Accessible, unstyled UI primitives
- 📱 **Mobile Ready** - Capacitor integration for native mobile features
- 🎯 **100% TypeScript** - Full type safety and IntelliSense support
- 🎭 **Multiple Variants** - Classic, Solid, Soft, Outline, Ghost styles
- 🧩 **Form Management** - Formik integration with Zod validation
- 🔄 **State Management** - Recoil atoms for global state
- 📐 **Responsive Design** - Mobile-first with Tailwind CSS v4
- 🚀 **Tree-shakeable** - Only import what you need
- ♿ **Accessible** - WCAG compliant components

## 📦 Installation

```bash
# Using npm
npm install radixui-buildkit

# Using yarn
yarn add radixui-buildkit

# Using pnpm
pnpm add radixui-buildkit
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
yarn add react recoil formik zod
```

## 🚀 Quick Start

### 1. Import the CSS

Add the CSS import to your main application file:

```tsx
import 'radixui-buildkit/dist/index.css';
```

### 2. Wrap with RecoilRoot

For state management features:

```tsx
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      {/* Your app content */}
    </RecoilRoot>
  );
}
```

### 3. Start Using Components

```tsx
import { ZButton, ZInput, ZCard } from 'radixui-buildkit';

function MyComponent() {
  return (
    <ZCard className="p-6">
      <ZInput placeholder="Enter your email" type="email" />
      <ZButton variant="solid" className="mt-4">
        Submit
      </ZButton>
    </ZCard>
  );
}
```

## 🧩 Component Categories

### Form Components
- Input, TextArea, Select, Checkbox, Radio
- Switch, Slider, DatePicker, AmountInput
- Form validation with Zod schemas

### UI Elements  
- Button, Badge, Avatar, Card
- Dialog, Modal, Popover, Tooltip
- Tabs, Toggle, Accordion, Alert

### Layout Components
- Box, Flex, Grid, Container
- ScrollArea, Separator, AspectRatio

### Data Display
- Table with sorting/filtering
- Progress bars, Calendar
- DataList, VirtualList

### Utility Components
- ErrorBoundary, NetworkDetection
- Loaders, InfiniteScroll
- Typography components

### Pre-built Pages
- Login Page
- Register Page  
- 404 Not Found Page

## 🎨 Styling & Variants

Components support multiple style variants:

```tsx
// Button variants
<ZButton variant="solid">Solid</ZButton>
<ZButton variant="outline">Outline</ZButton>
<ZButton variant="ghost">Ghost</ZButton>
<ZButton variant="soft">Soft</ZButton>

// Sizes
<ZButton size="sm">Small</ZButton>
<ZButton size="md">Medium</ZButton>
<ZButton size="lg">Large</ZButton>
```

## 📱 Mobile Support

Built-in Capacitor integration for mobile features:

```tsx
import { showNotification } from 'radixui-buildkit';

// Native notifications
showNotification({
  title: 'Success',
  message: 'Operation completed',
  type: 'success'
});
```

## 🔌 Higher Order Components

### Network Detection
```tsx
import { NetworkDetectHOC } from 'radixui-buildkit';

const MyComponent = NetworkDetectHOC(({ isOnline }) => (
  <div>Status: {isOnline ? 'Online' : 'Offline'}</div>
));
```

### Global Components
```tsx
import { ZGlobalComponentsHOC } from 'radixui-buildkit';

const App = ZGlobalComponentsHOC(MyApp);
```

## 🛠️ Development

### Setup

```bash
# Clone the repository
git clone https://github.com/aoneahsan/radixui-buildkit.git
cd radixui-buildkit

# Install dependencies
yarn install

# Start development
yarn dev
```

### Available Scripts

```bash
yarn dev          # Start development mode
yarn build        # Build the package
yarn test         # Run tests
yarn build:css    # Build CSS only
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

MIT © [Ahsan Mahmood](https://github.com/aoneahsan)

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/radixui-buildkit)
- [GitHub Repository](https://github.com/aoneahsan/radixui-buildkit)
- [Issue Tracker](https://github.com/aoneahsan/radixui-buildkit/issues)
- [Changelog](./CHANGELOG.md)

## 🙏 Acknowledgments

Built with:
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Capacitor](https://capacitorjs.com/) - Native mobile bridge
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 💬 Support

- 📧 Email: aoneahsan@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/aoneahsan/radixui-buildkit/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/aoneahsan/radixui-buildkit/discussions)

## Migration from zaions-react-ui-kit

If you're migrating from the previous `zaions-react-ui-kit` package:

1. Update your package.json:
   ```json
   {
     "dependencies": {
       "radixui-buildkit": "latest"
     }
   }
   ```

2. Update your imports:
   ```tsx
   // Old
   import { ZButton } from 'zaions-react-ui-kit';
   
   // New
   import { ZButton } from 'radixui-buildkit';
   ```

3. No API changes - all components maintain the same interfaces!

---

<div align="center">
  <p>Made with ❤️ by <a href="https://aoneahsan.com">Ahsan Mahmood</a></p>
</div>