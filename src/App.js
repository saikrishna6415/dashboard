import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar/Index";
import Header from "./Header/index";
import BarGraph from "./Componenrs/BarGraph";

function App() {
  return (
    <div className="App">
      <div className="main"> 
        <Sidebar logo={logo} /> <Header />
      </div>
    </div>
  );
}

export default App;
