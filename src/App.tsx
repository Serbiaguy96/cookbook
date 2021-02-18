import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ErrorHandler from "./components/layouts/ErrorHandler";
import Recipes from "./components/pages/Recipes";
import RecipeDetail from "./components/pages/RecipeDetail";

function App() {
  return (
    <Router>
      <Switch>
        <ErrorHandler path="/" exact component={Recipes} />
        <ErrorHandler
          path="/recipe-detail/:recipeId"
          component={RecipeDetail}
        />
      </Switch>
    </Router>
  );
}

export default App;
