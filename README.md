# IntraGPT Frontend

A modern React + Vite frontend for the IntraGPT project, providing a conversational interface to a Retrieval-Augmented Generation (RAG) backend. Designed for seamless integration with a custom backend API, this frontend enables users to chat with an AI assistant, view conversation history, and experience a user-friendly interface.

---

## Features
- Clean, responsive chat UI with Markdown rendering
- Conversation history and message role distinction (user/assistant)
- Typing indicator for backend response
- Input box with multiline support and keyboard shortcuts
- Easy backend API configuration
- Ready for deployment to Azure Static Web Apps

---

## Tech Stack
- **React** (UI library)
- **Vite** (build tool for fast development)
- **JavaScript (ES6+)**
- **CSS Modules** for component styles
- **react-markdown** for Markdown rendering
- **remark-gfm** for GitHub-flavored Markdown

---

## Project Structure
```
fe_react/
├── src/
│   ├── components/
│   │   ├── ChatBox.jsx      # Chat history UI
│   │   ├── ChatBox.css      # Styles for ChatBox
│   │   ├── ChatInput.jsx    # Input box and controls
│   │   └── ChatInput.css    # Styles for ChatInput
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   └── api.js               # API helper for backend requests (configure backend URL here)
├── index.html
├── package.json
├── vite.config.js
└── ...
```

---

## Local Development
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd fe_react
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure backend URL:**
   - Edit `src/api.js` and set the URL of your RAG backend API.
   - Example:
     ```js
     // src/api.js
     export const BACKEND_URL = "http://localhost:8000"; // or your deployed backend
     ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
   - The app runs at [http://localhost:5173](http://localhost:5173) by default.

---

## Build Instructions
To create a production build:
```bash
npm run build
```
- Output will be generated in the `dist/` folder.

---