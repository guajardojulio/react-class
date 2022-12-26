import React, { useState, useEffect } from "react";
import { Route, Switch} from "wouter";
import "./App.css";
import Home from "./page/home/index"
import SeacrhResults from "./page/search-results";
function App() {
  return (
    <div className="App">
      <div>
        <h1>My firts App</h1>
      </div>
        <Switch>
            <Route path="/" component={Home}></Route>
            <Route path="/SearchResults/:keyword" component={SeacrhResults}></Route>
        </Switch>
    </div>
  );
}
export default App;