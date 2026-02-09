# CELPIP Writing AI Simulator

A production-ready React application for practicing CELPIP writing tasks (Task 1: Email & Task 2: Survey). It features 50+ real exam questions, a custom topic generator, and instant AI grading/feedback powered by Google Gemini.

## Prerequisites

1.  **Node.js**: Install Node.js (version 18 or higher) from [nodejs.org](https://nodejs.org/).
2.  **Gemini API Key**: Get a free API key from [Google AI Studio](https://aistudio.google.com/).

---

## 🚀 How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <your-repo-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure API Key:**
    *   Create a file named `.env` in the root directory.
    *   Add your Gemini API key to it:
        ```env
        API_KEY=AIzaSy...YourKeyHere
        ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    *   Open your browser and navigate to `http://localhost:5173`.

---

## 🌐 How to Host on GitHub Pages

This project is configured to use **Vite**, which makes deployment to GitHub Pages straightforward.

### Option 1: Manual Deployment (Easiest for beginners)

1.  **Build the project:**
    Make sure your `.env` file exists with your `API_KEY` before building, or the key won't be included.
    ```bash
    npm run build
    ```
    *Note: Since this is a client-side app, the API Key will be embedded in the built JavaScript files. For personal practice, this is fine. For a public website, users will be able to see your key if they inspect the code. You might want to restrict the API key usage to your specific GitHub Pages domain in the Google Cloud Console.*

2.  **Commit the `dist` folder:**
    By default, `dist` is ignored. To deploy manually, you can force add it or use a separate branch.
    
    A cleaner way for manual hosting:
    *   Run `npm run build`
    *   Install the `gh-pages` package globally: `npm install -g gh-pages`
    *   Run `gh-pages -d dist`
    *   This will push the `dist` folder to a `gh-pages` branch on your repo.

### Option 2: Automated Deployment via GitHub Actions (Recommended)

1.  **Push your code** to a GitHub repository.

2.  **Add your Secret:**
    *   Go to your GitHub Repository **Settings** > **Secrets and variables** > **Actions**.
    *   Click **New repository secret**.
    *   Name: `API_KEY`
    *   Value: Paste your Gemini API Key.

3.  **Create Workflow File:**
    *   Create a file at `.github/workflows/deploy.yml`.
    *   Paste the content below:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
        env:
          API_KEY: ${{ secrets.API_KEY }}
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4.  **Enable Pages:**
    *   Go to Repository **Settings** > **Pages**.
    *   Under "Build and deployment", select **GitHub Actions** as the source.

5.  **Commit and Push:**
    *   Once you push the workflow file, GitHub Actions will automatically build your app (injecting the secret key) and deploy it to the web.

---

## ⚠️ Important Security Note

Since this is a client-side application (Static Site), the API Key is embedded in the javascript code running on the user's browser.

*   **Risk**: A knowledgeable user could extract your API key.
*   **Mitigation**: Go to [Google AI Studio / Cloud Console](https://console.cloud.google.com/apis/credentials) and **restrict** your API Key.
    *   Set **Application restrictions** to "HTTP referrers (websites)".
    *   Add your GitHub Pages URL (e.g., `https://yourusername.github.io/*`) and `http://localhost:*` (for testing).
    *   This prevents your key from being used on other websites.
