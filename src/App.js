import React from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Chat from "./component/Chat";
// import { selectUser } from "./features/userSlice";
// import { useSelector } from "react-redux";

function App() {
  // const user = useSelector(selectUser);

  return (
    <div className="App">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
