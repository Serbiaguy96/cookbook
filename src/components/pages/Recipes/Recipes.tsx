import React from "react";
import { RecipeListItem, RecipesList } from "../../../store/recipes/types";
import Loader from "../../atoms/Loader";
import { RecipesHeader } from "../../atoms/headers";
import { RecipesListContainer } from "./styles";
import RecipeItem from "./RecipeItem";
import { MainContentContainer } from "../../../global/globalStyles";
import InfiniteScroll from "react-infinite-scroll-component";

export type RecipesProps = {
  recipes: RecipesList;
  areRecipesLoading: boolean;
  fetchMoreRecipes: () => void;
  moreRecipesToLoad: boolean;
};

const Recipes = ({
  recipes,
  areRecipesLoading,
  fetchMoreRecipes,
  moreRecipesToLoad,
}: RecipesProps) => {
  const forAllRecipes = (recipe: RecipeListItem, index: number) => {
    const { name, duration, id, score } = recipe;
    return (
      <RecipeItem
        name={name}
        duration={duration}
        id={id}
        score={score}
        index={index}
      />
    );
  };

  return (
    <MainContentContainer hideOverflow>
      <RecipesHeader />
      {areRecipesLoading ? (
        <Loader size={50} />
      ) : (
        <RecipesListContainer id="scrollableTarget">
          <InfiniteScroll
            dataLength={recipes.length}
            next={fetchMoreRecipes}
            hasMore={moreRecipesToLoad}
            loader={<Loader size={25} />}
            scrollableTarget="scrollableTarget"
            style={{ overflow: "hidden" }}
          >
            {recipes.map(forAllRecipes)}
          </InfiniteScroll>
        </RecipesListContainer>
      )}
    </MainContentContainer>
  );
};

export default Recipes;
