import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ErrorHandler from "./components/layouts/ErrorHandler";
import Recipes from "./components/pages/Recipes";

function App() {
  return (
    <Router>
      <Switch>
        <ErrorHandler path="/" exact component={Recipes} />
      </Switch>
    </Router>
  );
}

export default App;
