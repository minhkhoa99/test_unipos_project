import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeApp } from "firebase/app";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const firebaseConfig = {
  apiKey: "AIzaSyAT_sznwzunieatQIa-g5oInZEZgFGSwiE",
  authDomain: "chat-a20f6.firebaseapp.com",
  databaseURL: "https://chat-a20f6-default-rtdb.firebaseio.com",
  projectId: "cat-a20f6",
  storageBucket: "chat-a20f6.appspot.com",
  messagingSenderId: "561110898973",
  appId: "1:561110898973:web:2d9fce999e69a1f33829f4",
};

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
