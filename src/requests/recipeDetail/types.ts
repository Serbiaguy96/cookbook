export interface RecipeUpdateData {
  name?: string;
  description?: string;
  duration?: number;
  ingredients?: string[];
  info?: string;
  id?: string;
  score?: number;
}

export interface RecipeRatingDTO {
  score: number;
  recipe: string;
  id: string;
};
