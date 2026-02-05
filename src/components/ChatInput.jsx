import React, { useRef, useEffect } from "react";
import "./ChatInput.css";

export default function ChatInput({ query, setQuery, onSend, onClear, disabled }) {
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !disabled) {
      e.preventDefault();
      onSend();
    }
  };

  // Automatically focus textarea when re-enabled
  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled]);

  return (
    <div className="chat-input-container">
      <textarea
        ref={inputRef}
        className="chat-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message... (Shift+Enter for newline)"
        disabled={disabled}
      />
      <button className="btn-send" onClick={onSend} disabled={disabled}>
        Send
      </button>
      <button className="btn-clear" onClick={onClear} disabled={disabled}>
        Clear
      </button>
    </div>
  );
}