import React from 'react';
import '../Css/SidebarChat.css';
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className='sidebarChat__info'>
            <small>Timestamp</small>
            <h3>Chat Name</h3>
            <p>Message</p>
        </div>
    </div>
  )
}

export default SidebarChat