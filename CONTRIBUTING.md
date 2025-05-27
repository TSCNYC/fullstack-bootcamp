# Contributing to Full Stack Dev Bootcamp

Thank you for your interest in contributing to the Full Stack Dev Bootcamp! This document provides guidelines and instructions for contributing to this project.

## Contributor License Agreement (CLA)

Before contributing to this project, you must sign our [Contributor License Agreement](CLA.md). This agreement ensures that your contributions can be used by Times Square Church for ministry purposes while protecting your rights as a contributor.

### Signing the CLA

1. **First-time Contributors**:
   - Read the [CLA.md](CLA.md) document
   - Fill out the signature section with your information
   - Create a new file in the `.github/CLA_SIGNED/` directory named `YOUR_GITHUB_USERNAME.md`
   - Copy the signature section from CLA.md into this file and fill it out
   - Submit this file as a pull request

2. **Returning Contributors**:
   - No need to sign again if you've already signed
   - Your previous signature will be recognized automatically

3. **Corporate Contributors**:
   - If you're contributing on behalf of a company
   - Have an authorized representative sign the CLA
   - Include company name and position in the signature

### CLA Enforcement

- All pull requests are automatically checked for CLA signatures
- PRs from contributors who haven't signed the CLA will be blocked
- The CLA check must pass before your PR can be merged
- If you've signed the CLA but the check is failing, please contact the maintainers

### CLA Verification

Your CLA signature will be verified by:
1. GitHub Actions workflow
2. Project maintainers
3. Automated CLA checking system

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in the Issues section
2. If not, create a new issue with:
   - A clear, descriptive title
   - Steps to reproduce the bug
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, browser, etc.)

### Suggesting Features

1. Check if the feature has already been suggested
2. Create a new issue with:
   - A clear, descriptive title
   - Detailed description of the feature
   - Use cases and examples
   - Any relevant technical considerations

### Pull Requests

1. Fork the repository
2. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Run tests and ensure they pass
5. Commit your changes with clear, descriptive commit messages
6. Push to your fork
7. Create a pull request with:
   - A clear title and description
   - Reference to any related issues
   - Screenshots (if applicable)

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fullstack-bootcamp.git
   cd fullstack-bootcamp
   ```

2. Set up the development environment:
   - Follow the instructions in `docs/day_0_environment_setup.md`
   - Install all required dependencies
   - Configure your development environment

3. Run the development servers:
   ```bash
   # Backend
   cd server
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   flask run

   # Frontend
   cd client
   npm install
   npm start
   ```

## Code Style Guidelines

### Python (Backend)
- Follow PEP 8 style guide
- Use type hints
- Write docstrings for functions and classes
- Keep functions small and focused
- Use meaningful variable names

### TypeScript/React (Frontend)
- Follow the Airbnb JavaScript Style Guide
- Use TypeScript for type safety
- Write meaningful component and function names
- Keep components small and focused
- Use proper prop types

## Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Maintain or improve test coverage

### Backend Testing
```bash
cd server
pytest
```

### Frontend Testing
```bash
cd client
npm test
```

## Documentation

- Update documentation for any new features
- Keep README.md up to date
- Document any new dependencies
- Update API documentation when endpoints change

## Review Process

1. All pull requests will be reviewed by maintainers
2. Reviews may request changes
3. Once approved, a maintainer will merge your PR

## Getting Help

- Check the documentation in the `docs/` directory
- Open an issue for questions or problems
- Join our community chat (if available)

## License

By contributing to this project, you agree that your contributions will be licensed under the project's MIT License. 
