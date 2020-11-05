import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTER } from "../action/actionMeals";

const initialState = {
  meals: MEALS,
  filteredMeal: MEALS,
  favoriteMeals: [],
};

const mealReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const exitingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (exitingIndex >= 0) {
        const updateFavMeals = [...state.favoriteMeals];
        updateFavMeals.splice(exitingIndex, 1);
        return { ...state, favoriteMeals: updateFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }

    case SET_FILTER:
      const appliedFilter = action.filter;
      const newFilteredMeal = state.meals.filter((meal) => {
        if (appliedFilter.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilter.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilter.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilter.vegetarian && !meal.isVegatarian) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeal: newFilteredMeal}

    default:
      return state;
  }
  return state;
};

export default mealReducers;
