import React from "react";
import "../Css/Message.css";

function Message() {
  return (
    <div className="message">
      <div className="message-content">
        <span>User Name</span>
        <p>This is a message </p>
        <small>26/4/23 08:38pm</small>
      </div>
    </div>
  );
}

export default Message;
