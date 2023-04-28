import React from "react";
import "../Css/Chat.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {  EmojiEmotions, MicNone, MoreHoriz, Style, Add } from "@material-ui/icons";
import Message from "./Message";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <Avatar />
          <h5>Chat Name</h5>
        </div>
        <div className="chat__headerRight">
            <SearchIcon/>
            <MoreHoriz/>
        </div>
      </div>
      <div className="chat__body">
        <div className="message__header">
            <Avatar/>
            <h3>Chat Name</h3>
        </div>
        <Message/>
        <Message/>
      </div>
      <div className="chat__footer">
        <EmojiEmotions/>
        <form>
            <input placeholder="Send a message" type="text"
            />
            <button type="submit">Send</button>
        </form>
        <div className="chat__footerIcons">
            <Style/>
            <MicNone/>
            <Add/>
        </div>
      </div>
    </div>
  );
}

export default Chat;
