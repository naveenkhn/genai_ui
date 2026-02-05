import React, { useState, useEffect } from "react";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";
import { askRAG } from "./api";
import "./App.css";

export default function App() {
  const [history, setHistory] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/.auth/me", { credentials: "include" })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data?.clientPrincipal?.userDetails) {
  //         setUser(data.clientPrincipal.userDetails);
  //       }
  //     })
  //     .catch(() => {});
  // }, []);

  async function handleSend() {
    if (!query.trim() || loading) return;
    const newHistory = [...history, { role: "user", content: query }];
    setHistory(newHistory);
    setQuery("");
    setLoading(true);

    try {
      const res = await askRAG(query, newHistory);
      const answer = res?.answer ?? "No response received.";
      setHistory([...newHistory, { role: "assistant", content: answer }]);
    } catch (err) {
      setHistory([
        ...newHistory,
        { role: "assistant", content: "Error fetching response." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const handleClear = () => {
    if (!loading) setHistory([]);
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="header-content">
          <span>
            IntraGPT<span className="sit-mark">SIT</span>
          </span>
          <div className="header-links">
            <div className="header-links-row">
              <a
                href="https://amadeus.atlassian.net/wiki/spaces/SPS/pages/3209726643/Documentation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
              <a
                href="https://amadeus.atlassian.net/wiki/spaces/SPS/pages/3209728755/Feedback"
                target="_blank"
                rel="noopener noreferrer"
              >
                Feedback
              </a>
            </div>
            {/*
            {user && (
              <div className="logged-in-user">
                Logged in as {user.split("@")[0]}
              </div>
            )}
            */}
          </div>
        </div>
      </header>
      <main className="chat-area">
        <ChatBox history={history} />
        {loading && (
          <div className="typing-indicator">
            SIT Assistant is thinking
            <span className="dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </div>
        )}
      </main>
      <ChatInput
        query={query}
        setQuery={setQuery}
        onSend={handleSend}
        onClear={handleClear}
        disabled={loading}
      />
    </div>
  );
}