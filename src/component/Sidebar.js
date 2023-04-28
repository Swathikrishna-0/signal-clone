import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "../Css/Sidebar.css";
import { Add } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar style={{ cursor: "pointer" }} />
        <div className="sidebar__input">
          <SearchIcon />
          <input type="text" placeholder="Search" style={{ color: "white" }} />
        </div>
        <Add
          style={{ color: "white", fontSize: "xx-large", paddingLeft: "10px" }}
        />
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
      <div className="sidebar__notes">
          <div className="sidebar__notesIcon">
            <SpeakerNotesIcon />
          </div>
          <p>Note to Self</p>
        </div>
    </div>
  );
}

export default Sidebar;
