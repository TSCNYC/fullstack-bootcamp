# Day 1: Git & GitHub Setup

## 🎯 Learning Objectives

By the end of this day, you will:
- Understand the fundamentals of version control
- Master essential Git commands and workflows
- Set up secure GitHub authentication
- Learn collaborative development practices
- Understand branching strategies

## 📝 Key Concepts

### 1. Version Control Basics
- What problems does version control solve?
  - [About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
  - [Why Version Control Matters](https://www.atlassian.com/git/tutorials/what-is-version-control)
- Centralized vs. distributed systems
  - [Comparing Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)
  - [Distributed vs. Centralized](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control#_distributed_vs_centralized)
- Git's core concepts
  - [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
  - [Core Concepts](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

### 2. Git Architecture
- Working directory
  - [Git Working Directory](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
  - [Working Tree](https://git-scm.com/docs/git-status#_output)
- Staging area
  - [Staging Area](https://git-scm.com/about/staging-area)
  - [The Staging Area in Detail](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging)
- Local repository
  - [Local Operations](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
  - [Git Objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)
- Remote repository
  - [Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
  - [Remote Management](https://git-scm.com/docs/git-remote)

### 3. Collaboration Workflow
- Branching strategies
  - [Branching Workflows](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)
  - [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
  - [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- Pull requests
  - [About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
  - [Creating Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- Code review process
  - [About Code Review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
  - [Code Review Best Practices](https://google.github.io/eng-practices/review/)
- Merge strategies
  - [Basic Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
  - [Advanced Merging](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging)
  - [Merge Strategies Explained](https://www.atlassian.com/git/tutorials/using-branches/merge-strategy)

## 💻 Practice Exercises

### Exercise 1: Git Configuration & Authentication

#### Deliverables
1. Configure your Git identity with your name and email
2. Set up SSH authentication for GitHub
3. Verify your configuration and test GitHub connection

#### Success Criteria
- Running `git config --list` shows your correct name and email
- You can successfully authenticate with GitHub using SSH
- You understand the difference between global and local Git configurations

#### Hints
- Look into `git config --global` for user settings
- Research SSH key generation and GitHub SSH key setup
- Consider setting up helpful Git aliases for common commands

#### Resources
- [Git Configuration Guide](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
- [GitHub SSH Setup Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Exercise 2: Repository Management

#### Deliverables
1. Create a new Git repository for your bootcamp project
2. Set up essential repository files:
   - README.md with project description
   - .gitignore for Python and Node.js
   - LICENSE file
3. Connect your local repository to GitHub
4. Make your first commit and push

#### Success Criteria
- Repository exists both locally and on GitHub
- README.md clearly describes the project
- .gitignore properly excludes common Python/Node.js files
- Initial commit is pushed to GitHub

#### Hints
- Think about what information belongs in README.md
- Research common .gitignore patterns for Python and Node.js
- Consider using GitHub's license templates
- Learn about remote repository management

#### Resources
- [GitHub Repository Creation Guide](https://docs.github.com/en/repositories/creating-and-managing-repositories)
- [Choose a License](https://choosealicense.com/)
- [GitHub .gitignore Templates](https://github.com/github/gitignore)

### Exercise 3: Basic Git Operations

#### Deliverables
1. Create a basic project structure for your fullstack application
2. Practice Git's basic workflow:
   - Staging files selectively
   - Creating atomic commits with meaningful messages
   - Viewing and understanding commit history
3. Demonstrate understanding of Git's state management

#### Success Criteria
- Project has a clear directory structure
- Each commit represents a single logical change
- Commit messages follow conventional commit format
- You can explain what's in staging vs. working directory

#### Hints
- Think about organizing backend and frontend code
- Research conventional commit message format
- Learn different options for `git log`
- Understand when to use `git add` vs `git add -p`

#### Resources
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Basics](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
- [Pro Git Book - Viewing History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)

### Exercise 4: Branching and Merging

#### Deliverables
1. Implement a feature using a feature branch
2. Create a second feature branch with conflicting changes
3. Successfully merge both features into main
4. Resolve any merge conflicts that arise

#### Success Criteria
- Feature branches follow naming conventions
- Changes are properly isolated in branches
- Merge conflicts are resolved correctly
- Branch history shows clear feature development

#### Hints
- Consider a branch naming strategy (e.g., feature/, bugfix/)
- Learn about different merge strategies
- Understand when to use merge vs. rebase
- Practice creating intentional conflicts to learn resolution

#### Resources
- [Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
- [Resolving Merge Conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)
- [Merging vs. Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

### Exercise 5: Collaborative Workflows

#### Deliverables
1. Fork an existing repository
2. Create a meaningful pull request:
   - Clear description
   - Well-organized changes
   - Linked to an issue
3. Review someone else's pull request
4. Provide constructive feedback

#### Success Criteria
- Pull request follows repository guidelines
- Changes are well-documented and organized
- Code review comments are helpful and specific
- You understand the fork and PR workflow

#### Hints
- Look at successful PRs in popular repositories
- Think about what makes a PR description useful
- Learn about GitHub's PR features (reviews, suggestions)
- Consider using PR templates

#### Resources
- [GitHub Pull Request Guide](https://docs.github.com/en/pull-requests)
- [Code Review Best Practices](https://google.github.io/eng-practices/review/)
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

## 🔍 Validation Checklist

Before proceeding to Day 2, verify:

1. Git Setup:
   - Identity configured correctly
   - SSH authentication working
   - Core commands understood

2. Repository Management:
   - Can create/clone repositories
   - Understand .gitignore usage
   - Can manage remotes

3. Basic Operations:
   - Can stage and commit changes
   - Write good commit messages
   - Navigate history effectively

4. Branch Operations:
   - Create and switch branches
   - Merge changes successfully
   - Resolve conflicts properly

5. Collaboration:
   - Create pull requests
   - Review code effectively
   - Use GitHub features properly

## 🚨 Common Issues and Solutions

1. Authentication Problems:
   - SSH key issues
   - Permission denied errors
   - Remote connection failures

2. Merge Conflicts:
   - Understanding conflict markers
   - Choosing the right resolution
   - Preventing common conflicts

3. History Issues:
   - Detached HEAD state
   - Lost commits
   - Reference errors

4. Branch Problems:
   - Branch naming conflicts
   - Merge strategy confusion
   - Remote tracking issues

## 📚 Additional Resources

1. Interactive Learning:
   - [Learn Git Branching](https://learngitbranching.js.org/)
   - [GitHub Skills](https://skills.github.com/)
   - [Git Katas](https://github.com/eficode-academy/git-katas)

2. Documentation:
   - [Pro Git Book](https://git-scm.com/book/en/v2)
   - [GitHub Docs](https://docs.github.com/)
   - [Git Reference](https://git-scm.com/docs)

3. Tools:
   - [GitHub CLI](https://cli.github.com/)
   - [Git GUI Clients](https://git-scm.com/downloads/guis)
   - [Git Extensions](https://gitextensions.github.io/)

## 🎉 Next Steps

After mastering Git basics:
- Explore advanced Git features
- Learn Git hooks and automation
- Understand Git internals
- Practice collaborative workflows

Remember: Git is a powerful tool that takes time to master. Focus on understanding the concepts rather than memorizing commands. 
