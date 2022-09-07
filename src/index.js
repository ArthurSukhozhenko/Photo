import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HeaderList from "./components/HeaderList/header-list";
import Search from "./components/Search/search";
import Title from "./components/Title/title";


const App = (
    <div className="app">
      <Title />
      <Search />
      <HeaderList />
    </div>
  );
  
ReactDOM.render(App, document.getElementById("root"));
