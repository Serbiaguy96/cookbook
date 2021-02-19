import { RecipeDTO } from "../../../store/recipeDetail/types";

export const getDictOfChangedValues = (
  defaultData: RecipeDTO,
  newData: RecipeDTO
): RecipeDTO => {
  let newDict: RecipeDTO = {} as RecipeDTO;
  Object.keys(newData).forEach((key) => {
    // @ts-ignore
    if (Array.isArray(newData[key])) {
      // @ts-ignore
      const newDataArr = newData[key];
      // @ts-ignore
      const defaultDataArr = defaultData[key];
      // @ts-ignore
      if (newDataArr.length !== defaultDataArr.length) {
        newDict = {
          ...newDict,
          // @ts-ignore
          [key]: newDataArr,
        };
      }
      // @ts-ignore
      for (let i = 0; i < newDataArr.length; i++) {
        if (newDataArr[i] !== defaultDataArr[i]) {
          newDict = {
            ...newDict,
            [key]: newDataArr,
          };
          break;
        }
      }
    }
    // @ts-ignore
    else if (newData[key] !== defaultData[key]) {
      newDict = {
        ...newDict,
        // @ts-ignore
        [key]: newData[key],
      };
    }
  });
  return newDict;
};
