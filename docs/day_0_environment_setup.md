# Day 0: Environment Setup Guide

## 🎯 Learning Objectives

By the end of this setup, you will:
- Have a complete development environment ready for full-stack development
- Understand the purpose of each tool in your development stack
- Know how to verify and troubleshoot your setup
- Be able to manage different Python and Node.js versions

## 📝 Key Components

### 1. Version Control
- Git for source control
- GitHub account and authentication
- SSH key setup

### 2. Backend Development
- Python 3.9+ runtime
- Virtual environment management
- Package management (pip)

### 3. Frontend Development
- Node.js runtime
- NPM package manager
- Development tools (nvm recommended)

### 4. Containerization
- Docker Engine
- Docker Compose
- Container management tools

### 5. IDE Setup
- Visual Studio Code
- Essential extensions
- Workspace configuration

## 💻 Setup Guide

### Exercise 1: Git Installation & Configuration

#### Deliverables
1. Install Git and configure your development environment:
   ```bash
   # Install Git (choose one based on your OS)
   # macOS with Homebrew
   brew install git
   
   # Ubuntu/Debian
   sudo apt-get update
   sudo apt-get install git
   
   # Windows: Download and install from https://git-scm.com/download/win
   ```

2. Configure your Git identity:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. Generate and add SSH key to GitHub:
   ```bash
   # Generate SSH key
   ssh-keygen -t ed25519 -C "your.email@example.com"
   
   # Start ssh-agent and add key
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

4. Add the SSH key to your GitHub account:
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub → Settings → SSH Keys → New SSH Key
   - Paste your key and save

#### Validation
Run these commands to verify your setup:
```bash
# Verify Git installation
git --version  # Should show 2.x.x or higher

# Verify Git configuration
git config --list  # Should show your name and email

# Test GitHub SSH connection
ssh -T git@github.com  # Should show "Hi username!"
```

### Exercise 2: Python Environment Setup

#### Deliverables
1. Install Python 3.9+ using pyenv:
   ```bash
   # Install pyenv (choose one based on your OS)
   # macOS
   brew install pyenv
   
   # Ubuntu/Debian
   curl https://pyenv.run | bash
   
   # Add to your shell configuration (~/.zshrc, ~/.bashrc, etc.)
   echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
   echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
   echo 'eval "$(pyenv init -)"' >> ~/.zshrc
   ```

2. Install Python and set global version:
   ```bash
   pyenv install 3.9.18
   pyenv global 3.9.18
   ```

3. Create a project virtual environment:
   ```bash
   # Create project directory
   mkdir my-flask-app
   cd my-flask-app
   
   # Create and activate virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   
   # Install basic packages
   pip install flask python-dotenv
   ```

#### Validation
```bash
# Verify Python version
python --version  # Should show 3.9.x

# Verify virtual environment
which python  # Should show path to venv
pip list  # Should show Flask and python-dotenv
```

### Exercise 3: Node.js Setup

#### Deliverables
1. Install Node Version Manager (nvm):
   ```bash
   # macOS/Linux
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   
   # Add to your shell configuration if not automatically added
   echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
   echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
   ```

2. Install Node.js LTS and set as default:
   ```bash
   nvm install --lts
   nvm use --lts
   nvm alias default 'lts/*'
   ```

3. Configure npm defaults:
   ```bash
   npm config set init-author-name "Your Name"
   npm config set init-author-email "your.email@example.com"
   npm config set init-license "MIT"
   ```

#### Validation
```bash
# Verify Node.js installation
node --version  # Should show LTS version
npm --version   # Should show compatible npm version

# Verify nvm
nvm list  # Should show installed versions
```

### Exercise 4: Docker Installation

#### Deliverables
1. Install Docker Desktop (recommended for local development):
   - Download Docker Desktop for your OS from https://www.docker.com/products/docker-desktop
   - Complete the installation wizard
   - Start Docker Desktop

2. Configure Docker permissions (Linux only):
   ```bash
   # Add your user to the docker group
   sudo groupadd docker
   sudo usermod -aG docker $USER
   ```

3. Enable Docker Compose:
   - Docker Compose comes with Docker Desktop
   - For Linux-only Docker Engine installations:
     ```bash
     sudo apt-get install docker-compose-plugin
     ```

#### Validation
```bash
# Verify Docker installation
docker --version
docker compose version

# Test Docker functionality
docker run hello-world
```

### Exercise 5: VS Code Setup

#### Deliverables
1. Install VS Code:
   - Download and install from https://code.visualstudio.com/

2. Install essential extensions:
   ```bash
   # Install from command line
   code --install-extension ms-python.python
   code --install-extension dbaeumer.vscode-eslint
   code --install-extension esbenp.prettier-vscode
   code --install-extension ms-azuretools.vscode-docker
   code --install-extension github.copilot
   code --install-extension eamodio.gitlens
   ```

3. Create workspace settings:
   ```json
   // .vscode/settings.json
   {
     "editor.formatOnSave": true,
     "python.formatting.provider": "black",
     "python.linting.enabled": true,
     "python.linting.pylintEnabled": true,
     "[javascript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[python]": {
       "editor.rulers": [88],
       "editor.tabSize": 4
     }
   }
   ```

#### Validation
- Open VS Code and verify all extensions are installed
- Open a Python file and check if IntelliSense works
- Create a JavaScript file and verify Prettier formatting works
- Open the Docker extension and verify it connects to Docker Desktop

## 🔍 Validation Checklist

Before proceeding to Day 1, verify:

1. Git Setup:
   - `git --version` shows correct version
   - GitHub SSH authentication works
   - Git configuration is complete

2. Python Environment:
   - `python --version` shows 3.9+
   - Virtual environment creation works
   - Pip can install packages

3. Node.js Setup:
   - `node --version` shows LTS version
   - NPM is working correctly
   - Can create new React projects

4. Docker Installation:
   - Docker daemon is running
   - Can pull images
   - Can run containers

5. VS Code Configuration:
   - All extensions installed
   - IntelliSense working
   - Git integration functional

## 🚨 Troubleshooting Guide

1. Git Issues:
   - SSH key problems
   - Permission denied errors
   - Authentication failures

2. Python Problems:
   - Path issues
   - Virtual environment errors
   - Package installation failures

3. Node.js Challenges:
   - Version conflicts
   - Global package issues
   - Permission problems

4. Docker Difficulties:
   - Daemon not running
   - Permission denied
   - Network issues

5. VS Code Problems:
   - Extension conflicts
   - Settings sync issues
   - Language server errors

## 📚 Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [Python Documentation](https://docs.python.org/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [VS Code Documentation](https://code.visualstudio.com/docs)

## 🎉 Next Steps

Once your environment is set up:
- Review each tool's basic commands
- Practice creating and activating environments
- Try building a simple project
- Explore VS Code features and shortcuts

Remember: A properly configured development environment is crucial for productivity. Take time to understand each tool and its purpose.
