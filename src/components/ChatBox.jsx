import React, { useRef, useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./ChatBox.css";

export default function ChatBox({ history }) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {history.map((msg, idx) => (
          <Message key={idx} msg={msg} />
        ))}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
}

function Message({ msg }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = msg.content.length > 1000;
  const displayText = expanded || !isLong ? msg.content : msg.content.slice(0, 1000) + "...";

  return (
    <div className={`msg ${msg.role}`}>
      <div className="label">
        <b>{msg.role === "assistant" ? "SIT Assistant:" : "You:"}</b>
      </div>
      <div className="message-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <div className="code-block">
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    wrapLines={true}
                    showLineNumbers={true}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                  <button
                    className="copy-btn"
                    onClick={() => navigator.clipboard.writeText(String(children))}
                  >
                    Copy
                  </button>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            a({ node, ...props }) {
              return <a {...props} target="_blank" rel="noopener noreferrer">{props.children}</a>;
            },
          }}
        >
          {displayText}
        </ReactMarkdown>
        {isLong && (
          <button
            className="toggle-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less ▲" : "Show more ▼"}
          </button>
        )}
      </div>
    </div>
  );
}