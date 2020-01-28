import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import { Topnav } from "./components/Topnav";

function App() {
  return (
    <Router>
      <div>
        <Topnav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
