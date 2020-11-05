import MealDetailScreen from "../screens/MealsDetailScreen";

class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingrdieant,
    steps,
    isGlutenFree,
    isVegan,
    isVegatarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingrdieant = ingrdieant;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isLactoseFree = isLactoseFree;
    this.isVegatarian = isVegatarian;
  }
}

export default Meal;
