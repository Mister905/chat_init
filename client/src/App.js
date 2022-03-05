import Home from "./components/home/Home";
import Chat from "./components/chat/Chat";
import { Switch, Route } from "react-router-dom";
import React from "react";
import io from "socket.io-client";

const socket = io.connect("/");

function Appmain(props) {
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
        />
      </div>
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home socket={socket} />
        </Route>
        <Route path="/chat/:roomname/:username" component={Appmain} />
      </Switch>
    </div>
  );
}

export default App;
