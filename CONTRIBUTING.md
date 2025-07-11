# Contributing to RadixUI BuildKit

First off, thank you for considering contributing to RadixUI BuildKit! It's people like you that make RadixUI BuildKit such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by the [RadixUI BuildKit Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report).

#### Before Submitting A Bug Report

* **Check the [documentation](./docs)** for a list of common questions and problems.
* **Perform a [cursory search](https://github.com/aoneahsan/radixui-buildkit/issues)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://github.com/aoneahsan/radixui-buildkit/issues). Create an issue and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened.

### Suggesting Enhancements

#### Before Submitting An Enhancement Suggestion

* **Check the [documentation](./docs)** to see if the enhancement is already available.
* **Perform a [cursory search](https://github.com/aoneahsan/radixui-buildkit/issues)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/aoneahsan/radixui-buildkit/issues). Create an issue and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples.
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most RadixUI BuildKit users.
* **List some other UI libraries where this enhancement exists.**

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues](https://github.com/aoneahsan/radixui-buildkit/labels/beginner) - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues](https://github.com/aoneahsan/radixui-buildkit/labels/help%20wanted) - issues which should be a bit more involved than `beginner` issues.

### Pull Requests

The process described here has several goals:

- Maintain RadixUI BuildKit's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible RadixUI BuildKit
- Enable a sustainable system for RadixUI BuildKit's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code follows the existing code style.
6. Issue that pull request!

## Development Setup

1. Fork and clone the repo
   ```bash
   git clone https://github.com/[your-username]/radixui-buildkit.git
   cd radixui-buildkit
   ```

2. Install dependencies
   ```bash
   yarn install
   ```

3. Create a branch
   ```bash
   git checkout -b my-feature-branch
   ```

4. Start development server
   ```bash
   yarn dev
   ```

5. Make your changes and ensure tests pass
   ```bash
   yarn test
   ```

6. Build the package to ensure it compiles
   ```bash
   yarn build
   ```

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐎 `:racehorse:` when improving performance
    * 📝 `:memo:` when writing docs
    * 🐛 `:bug:` when fixing a bug
    * 🔥 `:fire:` when removing code or files
    * ✅ `:white_check_mark:` when adding tests
    * 🔒 `:lock:` when dealing with security
    * ⬆️ `:arrow_up:` when upgrading dependencies
    * ⬇️ `:arrow_down:` when downgrading dependencies

### TypeScript Styleguide

* Use TypeScript for all new code
* Ensure all exports have explicit type annotations
* Follow the existing code style
* Use meaningful variable names
* Add JSDoc comments for public APIs
* Avoid using `any` type - use `unknown` or proper types instead

### Component Guidelines

* All components should be functional components using hooks
* Components should be properly typed with TypeScript interfaces
* Export component props interfaces
* Follow the existing naming convention (Z prefix for components)
* Ensure components are accessible (use Radix UI primitives when possible)
* Add stories/examples for new components in the documentation

### Testing

* Write tests for all new functionality
* Ensure existing tests pass
* Test edge cases and error scenarios
* Use meaningful test descriptions
* Follow the existing test structure

## Documentation

* Update the API documentation for new exports
* Add examples for new components
* Update the README if needed
* Keep documentation concise and clear
* Use proper markdown formatting

## Questions?

Feel free to contact the maintainer at [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) or open an issue for discussion.

## Recognition

Contributors will be recognized in the project's README and release notes. We appreciate every contribution, no matter how small!

Thank you for contributing to RadixUI BuildKit! 🎉