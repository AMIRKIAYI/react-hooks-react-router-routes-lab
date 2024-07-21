import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/directors" exact component={Directors} />
          <Route path="/actors" exact component={Actors} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
