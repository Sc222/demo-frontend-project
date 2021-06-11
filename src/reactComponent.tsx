import React from "react";
import logo from "./logo.svg";
import "./style.css";

function ReactComponent() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code> page code </code> and save to reload.
        </p>
        <a className="app-link" href="https://altecsystems.ru/" target="_blank" rel="noopener noreferrer">
          Altec Systems
        </a>
      </header>
    </div>
  );
}

export default ReactComponent;
