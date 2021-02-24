import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import "./css/bootstrap-reboot.min.css";
import "./css/bootstrap-grid.min.css";
import "./scss/styles.scss";
import "slick-carousel/slick/slick.scss"; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);