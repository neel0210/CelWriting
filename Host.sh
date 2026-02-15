#!/bin/bash

# --- Color Definitions ---
BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}---------------------------------------${NC}"
echo -e "${BLUE}       CelWrite Environment Setup      ${NC}"
echo -e "${BLUE}---------------------------------------${NC}"

# --- Identify Host OS ---
OS_TYPE="Unknown"
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    if [ -d "/system/app" ] && [ -d "/data/data" ]; then
        OS_TYPE="Android (Root/Direct)"
    elif [[ -n "$TERMUX_VERSION" ]]; then
        OS_TYPE="Termux"
    else
        OS_TYPE="Linux"
    fi
elif [[ "$OSTYPE" == "darwin"* ]]; then
    OS_TYPE="MacOS"
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "win32" ]]; then
    OS_TYPE="Windows"
else
    OS_TYPE="Unknown Linux/Unix"
fi

echo -e "${YELLOW}Detected Host:${NC} $OS_TYPE"

# --- Dependency Check & Installation ---
check_and_install() {
    if ! command -v node &> /dev/null; then
        echo -e "${RED}Node.js not found. Attempting to install...${NC}"
        case "$OS_TYPE" in
            "Termux")
                pkg update && pkg install nodejs -y
                ;;
            "Linux")
                if command -v apt-get &> /dev/null; then
                    sudo apt-get update && sudo apt-get install -y nodejs npm
                elif command -v pacman &> /dev/null; then
                    sudo pacman -Syu nodejs npm --noconfirm
                fi
                ;;
            "MacOS")
                if command -v brew &> /dev/null; then
                    brew install node
                else
                    echo -e "${RED}Please install Homebrew or Node.js manually.${NC}"
                    exit 1
                fi
                ;;
            "Windows")
                echo -e "${RED}Please install Node.js via official installer (nodejs.org).${NC}"
                exit 1
                ;;
        esac
    else
        echo -e "${GREEN}✓ Node.js is already installed (${NC}$(node -v)${GREEN})${NC}"
    fi
}

check_and_install

# --- Execution ---
echo -e "\n${BLUE}Step 1: Installing dependencies...${NC}"
npm install

echo -e "\n${BLUE}Step 2: Auditing and fixing vulnerabilities...${NC}"
npm audit fix --force

echo -e "\n${GREEN}Step 3: Launching CelWrite Dev Server...${NC}"
echo -e "${YELLOW}---------------------------------------${NC}"
npm run dev
