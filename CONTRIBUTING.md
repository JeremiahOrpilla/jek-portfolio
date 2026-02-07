# Contributing to Jek.dev

Thank you for your interest in contributing to the Jek.dev portfolio! This document provides guidelines and instructions for contributing.

## 🎯 Types of Contributions

We welcome contributions in several forms:

- **Bug Reports** - Report issues or unexpected behavior
- **Feature Requests** - Suggest new features or improvements
- **Code Improvements** - Submit pull requests with bug fixes or enhancements
- **Documentation** - Improve README, guides, or code comments
- **Design Suggestions** - Propose UI/UX improvements

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button on GitHub to create your own copy of the repository.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/jek.dev.git
cd jek.dev
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/add-projects-section` - for new features
- `fix/navigation-bug` - for bug fixes
- `docs/update-readme` - for documentation
- `style/improve-colors` - for styling changes

### 4. Install Dependencies

```bash
pnpm install
```

### 5. Make Your Changes

Edit the relevant files. Here are the main directories:

- `client/src/pages/Home.tsx` - Main portfolio page
- `client/src/index.css` - Global styles and theme
- `client/index.html` - HTML template
- `README.md` - Documentation

### 6. Test Your Changes

```bash
# Start the development server
pnpm dev

# Type check
pnpm check

# Format code
pnpm format
```

Visit `http://localhost:5173` to see your changes.

### 7. Commit Your Changes

```bash
git add .
git commit -m "Descriptive commit message"
```

**Commit Message Guidelines:**
- Use present tense ("Add feature" not "Added feature")
- Be descriptive and concise
- Reference issues if applicable: "Fix #123"

Examples:
- `Add projects showcase section`
- `Fix mobile navigation alignment`
- `Update color scheme documentation`
- `Improve animation performance`

### 8. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 9. Create a Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill in the PR description with:
   - What changes you made
   - Why you made them
   - Any related issues
5. Click "Create Pull Request"

## 📋 Pull Request Guidelines

### PR Title Format

```
[Type] Brief description

Examples:
[Feature] Add projects showcase section
[Fix] Fix mobile navigation alignment
[Docs] Update deployment guide
[Style] Improve button hover effects
```

### PR Description Template

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update

## Related Issues
Closes #123

## How to Test
Steps to test the changes:
1. Navigate to...
2. Click...
3. Verify...

## Screenshots (if applicable)
Add screenshots or GIFs demonstrating the changes

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have tested my changes
- [ ] I have updated documentation if needed
```

## 🎨 Code Style Guidelines

### JavaScript/TypeScript

- Use meaningful variable names
- Keep functions small and focused
- Add comments for complex logic
- Use TypeScript types

```typescript
// Good
const getSkillLevel = (skillName: string): number => {
  const skill = skills.find(s => s.name === skillName);
  return skill?.level ?? 0;
};

// Avoid
const getSkill = (name) => {
  return skills.find(s => s.name === name).level;
};
```

### CSS/Tailwind

- Use Tailwind utility classes
- Avoid custom CSS when possible
- Use semantic class names
- Keep animations subtle

```jsx
// Good
<button className="px-4 py-2 bg-amber-400 hover:bg-amber-500 rounded-lg transition-colors">
  Click me
</button>

// Avoid
<button style={{ padding: '8px 16px', backgroundColor: '#f59e0b' }}>
  Click me
</button>
```

### React Components

- Use functional components with hooks
- Keep components focused and reusable
- Use meaningful prop names
- Add JSDoc comments for complex components

```typescript
// Good
interface SkillCardProps {
  name: string;
  level: number;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon }) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <span className="text-2xl">{icon}</span>
      <h3>{name}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div style={{ width: `${level}%` }} className="bg-amber-400 h-2 rounded-full" />
      </div>
    </div>
  );
};
```

## 🧪 Testing

Before submitting a PR:

1. **Type Check**
   ```bash
   pnpm check
   ```

2. **Format Code**
   ```bash
   pnpm format
   ```

3. **Build for Production**
   ```bash
   pnpm build
   ```

4. **Manual Testing**
   - Test on desktop
   - Test on mobile
   - Test in different browsers
   - Test all interactive elements

## 📱 Browser Compatibility

Ensure your changes work in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🐛 Reporting Bugs

When reporting bugs, include:

1. **Description** - What is the bug?
2. **Steps to Reproduce** - How can we reproduce it?
3. **Expected Behavior** - What should happen?
4. **Actual Behavior** - What actually happens?
5. **Environment** - Browser, OS, device
6. **Screenshots** - If applicable

Example:
```
Title: Navigation menu not closing on mobile

Description:
When I click a navigation link on mobile, the menu stays open.

Steps to Reproduce:
1. Open the site on mobile
2. Click the hamburger menu
3. Click a navigation link
4. The menu remains open

Expected Behavior:
The menu should close after clicking a link

Actual Behavior:
The menu stays open

Environment:
- Browser: Chrome Mobile
- Device: iPhone 12
```

## 💡 Feature Requests

When suggesting features, include:

1. **Use Case** - Why is this needed?
2. **Description** - What should it do?
3. **Examples** - How would it work?
4. **Benefits** - What problem does it solve?

Example:
```
Title: Add dark mode toggle

Use Case:
Users prefer dark mode for reduced eye strain, especially at night.

Description:
Add a toggle button in the navigation to switch between light and dark themes.

Examples:
- Toggle in top-right corner of navbar
- Saves preference to localStorage
- Respects system preference on first visit

Benefits:
- Better accessibility
- Improved user experience
- Reduces eye strain
```

## 📚 Documentation

When updating documentation:

1. Use clear, concise language
2. Include code examples
3. Add screenshots where helpful
4. Keep formatting consistent
5. Update table of contents if needed

## 🚫 What NOT to Do

- Don't submit PRs for unrelated changes
- Don't include large refactors without discussion
- Don't remove existing features without discussion
- Don't add external dependencies without justification
- Don't commit sensitive information (API keys, passwords)

## ✅ Review Process

1. **Automated Checks** - GitHub Actions runs tests and linting
2. **Code Review** - Maintainers review your code
3. **Feedback** - We may request changes
4. **Approval** - Once approved, your PR will be merged
5. **Deployment** - Changes automatically deploy to production

## 🎉 After Your PR is Merged

- Your contribution will be live on the site
- You'll be listed as a contributor
- Thank you for improving Jek.dev!

## ❓ Questions?

- Check existing issues and discussions
- Open a new discussion for questions
- Comment on related issues

## 📖 Additional Resources

- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [How to Write Good Commit Messages](https://chris.beams.io/posts/git-commit/)
- [React Best Practices](https://react.dev/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Thank you for contributing to Jek.dev!** 🙏
