import React from "react";
import "./App.css";
import Header from "./componnets/Header";
import Home from "./componnets/Home";
import Footer from "./componnets/Footer";
import SearchPage from "./componnets/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
