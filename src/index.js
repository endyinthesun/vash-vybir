import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import "./styles/bootstrap-reboot.min.css";
// import "./styles/bootstrap-grid.min.css";
import "./styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);