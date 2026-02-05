# GenAI UI

GenAI UI is a reusable, backend-agnostic frontend built with React and Vite for GenAI-powered applications.  
It provides a clean conversational interface that can work with any LLM or GenAI backend (RAG-based or otherwise) through a simple API contract.

---

## Features
- Clean, responsive chat UI with Markdown rendering
- Conversation history and message role distinction (user/assistant)
- Typing indicator for backend response
- Input box with multiline support and keyboard shortcuts
- Easy backend API configuration

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
genai_ui/
├── src/
│   ├── components/
│   │   ├── ChatBox.jsx      # Chat history UI
│   │   ├── ChatBox.css      # Styles for ChatBox
│   │   ├── ChatInput.jsx    # Input box and controls
│   │   └── ChatInput.css    # Styles for ChatInput
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   └── api.js               # Backend API helper (base URL configured via environment variable)
├── index.html
├── package.json
├── vite.config.js
└── ...
```

---

## Local Development
1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/genai_ui.git
   cd genai_ui
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure backend URL:**
   Create a `.env` file using the provided example:
   ```bash
   cp .env.example .env
   ```
   Update the backend base URL inside `.env` as needed.
4. **Start the development server:**
   ```bash
   npm run dev
   ```
   - The app runs at [http://localhost:5173](http://localhost:5173) by default.

---

## Backend Expectations
GenAI UI expects a backend that exposes a simple HTTP API for conversational requests.  
The exact implementation is intentionally flexible, but a typical setup includes:
- A POST endpoint to submit user prompts
- A JSON response containing the assistant reply
- Optional metadata such as sources or citations

This design allows GenAI UI to be reused with different GenAI stacks, models, and deployment environments.

---

## Build Instructions
To create a production build:
```bash
npm run build
```
- Output will be generated in the `dist/` folder.

---