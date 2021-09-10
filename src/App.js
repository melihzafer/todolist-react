import React from "react";
import "./App.css";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from "./Home";
import LoginGoogle from "./signin";
function App() {
  const [user] = useAuthState(firebase.auth());
  return <div className="App">{user ? <Home /> : <LoginGoogle />}</div>;
}

export default App;
