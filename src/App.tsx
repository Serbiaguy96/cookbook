import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorHandler from "./components/layouts/ErrorHandler";
import Recipes from "./components/pages/Recipes";
import RecipeDetail from "./components/pages/RecipeDetail";
import CreateRecipe from "./components/pages/CreateRecipe";
import UpdateRecipe from "./components/pages/UpdateRecipe";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <Router>
      <Switch>
        <ErrorHandler path="/" exact component={Recipes} />
        <ErrorHandler
          path="/recipe-detail/:recipeId"
          component={RecipeDetail}
        />
        <ErrorHandler path="/new-recipe" component={CreateRecipe} />
        <ErrorHandler
          path="/update-recipe/:recipeId"
          component={UpdateRecipe}
        />
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
