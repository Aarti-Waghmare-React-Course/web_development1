// 6: Auto Scroll to Bottom
// Goal: Automatically scroll a chat box or container to the bottom when new content is added.

import React, { useRef, useState, useEffect } from "react";

const AutoScrollToBottom_06 = () => {
  const [messages, setMessages] = useState([]);
  const endRef = useRef(null); // Ref to the bottom of the list

  // Scroll to bottom whenever messages change
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = () => {
    setMessages((prev) => [...prev, `Message ${prev.length + 1}`]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Auto Scroll Chat Box</h2>
      <div
        style={{
          border: "1px solid #ccc",
          height: "200px",
          width: "300px",
          margin: "auto",
          overflowY: "scroll",
          padding: "10px",
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
        {/* Empty div to scroll into view */}
        <div ref={endRef} />
      </div>
      <br />
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
};

export default AutoScrollToBottom_06;
