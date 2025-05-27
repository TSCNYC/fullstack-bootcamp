# Day 0: Environment Setup Guide

Welcome to the bootcamp! Today, you'll set up your development environment based on your operating system.

---

## 🧭 Objectives
- Install Git, Python, Node.js, Docker, and VS Code
- Install and configure essential VS Code extensions
- Clone the project repository
- Create your `.env` files

---

## 💻 Instructions by OS

### 🪟 Windows

1. **Install Git**: [Download](https://git-scm.com/download/win)
2. **Install Python**: [Download](https://www.python.org/downloads/windows/) (✔ check “Add to PATH”)
3. **Install Node.js**: [Download](https://nodejs.org/) (use LTS version)
4. **Install Docker Desktop**: [Download](https://www.docker.com/products/docker-desktop) (Enable WSL2)
5. **Install VS Code**: [Download](https://code.visualstudio.com/)
6. Open VS Code and install recommended extensions.

---

### 🍎 macOS

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git python node
brew install --cask docker visual-studio-code
```

- Run Docker Desktop once after install
- Launch VS Code and install extensions

---

### 🐧 Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install git curl python3 python3-pip python3-venv nodejs npm docker.io docker-compose -y
sudo systemctl enable docker
sudo systemctl start docker
```

- Add user to Docker group:
```bash
sudo usermod -aG docker $USER
```
- Install VS Code via Snap:
```bash
sudo snap install code --classic
```

---

## 🔌 VS Code Extensions

These will be recommended automatically:
- Python
- ESLint
- Prettier
- Docker
- GitHub Pull Requests
- SQLTools + PostgreSQL Driver
- Markdown All in One
- Code Spell Checker

---

## 🗂️ Clone Repo & Create `.env` Files

```bash
git clone https://github.com/YOUR-ORG/YOUR-REPO.git
cd YOUR-REPO
```

Create the following:

### `server/.env`
```env
FLASK_ENV=development
DATABASE_URL=postgresql://user:pass@db:5432/mydb
```

### `client/.env`
```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

---

## ✅ Success Checklist

- All tools installed and versions verified
- Repo cloned
- `.env` files created
- VS Code extensions installed

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Docker not running | Open Docker Desktop manually |
| Python not found | Use `python3` |
| Cannot access database | Ensure container is running and `DATABASE_URL` is correct |

---

Let's move to Day 1: Git & GitHub Essentials!
