import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { View, StyleSheet } from "react-native";
import DeafultTetx from "../components/DeafultText";

const CategoryMealScren = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeal);

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayMeals.length === 0) {
    return (
      <View style={style.screen}>
        <DeafultTetx>tidak dapat menemukan , cek filter</DeafultTetx>
      </View>
    );
  }
  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMealScren.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCatgory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCatgory.title,
  };
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScren;
