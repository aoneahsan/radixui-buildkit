# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| 0.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within RadixUI BuildKit, please send an email to Ahsan Mahmood at [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com). All security vulnerabilities will be promptly addressed.

### What to Include in Your Report

Please include the following details in your report:

- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### What to Expect

- **Initial Response**: We will acknowledge receipt of your vulnerability report within 48 hours
- **Assessment**: We will confirm the vulnerability and determine its impact within 7 days
- **Fix Development**: We will develop and test a fix for confirmed vulnerabilities
- **Release**: Security patches will be released as soon as possible, typically within 30 days
- **Disclosure**: We will coordinate with you on the disclosure timeline

## Security Best Practices

When using RadixUI BuildKit in your applications:

### 1. Keep Dependencies Updated

Regularly update RadixUI BuildKit and all its dependencies:

```bash
yarn upgrade radixui-buildkit
yarn upgrade-interactive
```

### 2. Input Validation

Always validate user inputs, especially when using form components:

```typescript
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
```

### 3. Content Security Policy

Implement appropriate CSP headers when using the library:

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; style-src 'self' 'unsafe-inline';">
```

### 4. Secure Communication

- Always use HTTPS in production
- Never expose sensitive data in component props or state
- Use environment variables for API keys and secrets

### 5. Authentication & Authorization

When using the pre-built authentication pages:

- Implement proper server-side validation
- Use secure session management
- Implement rate limiting for login attempts
- Hash passwords using bcrypt or similar

### 6. XSS Prevention

- Never use `dangerouslySetInnerHTML` with user input
- Sanitize all user-generated content
- Use the built-in React escape mechanisms

### 7. Dependency Scanning

Regularly scan for vulnerabilities:

```bash
yarn audit
npm audit
```

## Security Features

RadixUI BuildKit includes several security features:

1. **TypeScript Support**: Helps prevent type-related vulnerabilities
2. **Input Sanitization**: Built-in components sanitize inputs by default
3. **ARIA Compliance**: Accessibility features that also improve security
4. **Secure Defaults**: Components are configured with security in mind

## Third-Party Dependencies

We regularly monitor and update our dependencies for security vulnerabilities. Key dependencies include:

- React: Core framework
- Radix UI: UI primitives
- Tailwind CSS: Styling
- Capacitor: Mobile bridge
- Formik: Form management
- Zod: Schema validation
- Recoil: State management

## Compliance

RadixUI BuildKit follows industry best practices for security:

- OWASP Top 10 awareness
- Regular dependency updates
- Security-focused code reviews
- Automated vulnerability scanning

## Contact

For any security concerns or questions, please contact:

- Email: [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)
- GitHub Security Advisories: [GitHub Security](https://github.com/aoneahsan/radixui-buildkit/security)

Thank you for helping keep RadixUI BuildKit and its users safe!