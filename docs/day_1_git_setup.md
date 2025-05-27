# Day 1: Git & GitHub Setup

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:
- Understand version control and its importance
- Set up Git on your local machine
- Create and manage a GitHub account
- Initialize a Git repository
- Make commits and push changes to GitHub
- Create and manage branches
- Collaborate with others using pull requests

## 📝 Prerequisites

- A computer with internet access
- Basic command line knowledge
- A GitHub account (we'll create one if you don't have it)

## 🚀 Lesson Content

### 1. Introduction to Version Control

Version control is a system that records changes to files over time, allowing you to:
- Track changes
- Revert to previous versions
- Collaborate with others
- Maintain different versions of your code

### 2. Git Installation

#### For macOS:
```bash
# Using Homebrew
brew install git

# Verify installation
git --version
```

#### For Windows:
1. Download Git from [git-scm.com](https://git-scm.com)
2. Run the installer
3. Verify installation in Command Prompt:
```bash
git --version
```

### 3. Git Configuration

Set up your identity:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 4. GitHub Account Setup

1. Go to [github.com](https://github.com)
2. Click "Sign Up"
3. Follow the registration process
4. Set up SSH keys for secure authentication:
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add SSH key to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key to clipboard (macOS)
pbcopy < ~/.ssh/id_ed25519.pub
# For Windows (PowerShell)
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
```

5. Add SSH key to GitHub:
   - Go to Settings > SSH and GPG keys
   - Click "New SSH key"
   - Paste your key and save

### 5. Creating Your First Repository

1. Create a new repository on GitHub:
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it "fullstack-bootcamp"
   - Add a description
   - Initialize with README
   - Choose a license

2. Clone the repository:
```bash
git clone git@github.com:yourusername/fullstack-bootcamp.git
cd fullstack-bootcamp
```

### 6. Basic Git Commands

```bash
# Check repository status
git status

# Add files to staging area
git add filename.txt
git add .  # Add all files

# Commit changes
git commit -m "Initial commit"

# Push changes to GitHub
git push origin main
```

### 7. Working with Branches

```bash
# Create a new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# List all branches
git branch

# Merge branches
git checkout main
git merge feature/new-feature
```

## 💻 Practice Exercises

1. Create a new branch called `day-1-exercise`
2. Create a file called `hello.txt` with some text
3. Commit the changes
4. Push the branch to GitHub
5. Create a pull request
6. Merge the pull request

## 📚 Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

## 🎯 Next Steps

- Review the [GitHub Flow](https://guides.github.com/introduction/flow/)
- Practice creating and merging pull requests
- Set up branch protection rules
- Learn about Git hooks

## 📝 Homework

1. Complete all practice exercises
2. Create a personal GitHub profile
3. Star and fork 3 interesting repositories
4. Read the [GitHub Flow](https://guides.github.com/introduction/flow/) guide

## 🔍 Quiz

1. What is version control?
2. How do you create a new branch?
3. What's the difference between `git add` and `git commit`?
4. How do you push changes to GitHub?
5. What is a pull request?

## 🎉 Conclusion

You've now learned the basics of Git and GitHub! These tools will be essential throughout the bootcamp and your development career. In the next lesson, we'll start building our Flask backend. 
