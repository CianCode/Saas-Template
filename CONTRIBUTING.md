# Contributing to Saas Template Repo

First off, thank you for considering contributing! ❤️
We welcome contributions of any kind: bug reports, feature requests, documentation improvements, or code contributions.

---

## Table of Contents
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Guidelines](#coding-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Requests](#pull-requests)
- [Code of Conduct](#code-of-conduct)

---

## How to Contribute

1. **Fork the repository** to your account.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/CianCode/Saas-Template.git
   cd Saas-Template
   ```
3. **Create a branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Make your changes**, ensuring your code follows the guidelines below.
5. **Run tests and linters** to ensure nothing is broken:
   ```bash
   pnpm lint
   pnpm lint:fix
   ```
6. **Commit your changes** with a meaningful message:
   ```bash
   git commit -m "Add awesome feature"
   ```
7. **Push your branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
8. **Open a Pull Request** on the main repository and describe your changes.

---

## Development Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Set up your `.env` based on `.env.example`.
3. Start the dev server:
   ```bash
   pnpm dev
   ```
4. Use the available scripts for database setup, linting, or UI component management:
   ```bash
   pnpm db:push
   pnpm db:seed
   pnpm ui:add
   ```

---

## Coding Guidelines

- **TypeScript first**: All new code should be strictly typed.
- **Use ShadCN UI components** wherever possible for UI consistency.
- **Tailwind CSS**: Stick to the existing design system.
- **ESLint & Prettier**: Run `pnpm lint` and `pnpm lint:fix` before committing.
- **No console logs** in production code.
- Write **tests** for new features when applicable.

---

## Commit Messages

Use clear, descriptive commit messages following the pattern:

```
<type>(<scope>): <description>
```

Examples:
```
feat(auth): add OTP email verification
fix(ui): correct dark mode toggle behavior
docs: update contributing guidelines
```

Types:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **refactor**: Code changes without affecting behavior
- **style**: Formatting, linting, missing semi-colons
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

---

## Pull Requests

- PRs should be **targeted to `main`** branch.
- Include a clear **description of changes**.
- Include screenshots or GIFs for UI/UX changes.
- Ensure all **tests pass** and **linting passes**.
- Small, focused PRs are preferred over huge ones.

---

## Code of Conduct

Please follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/).
Be respectful and kind in all interactions.
