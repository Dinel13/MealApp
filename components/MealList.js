import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "./MealItem";

const MealList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = (itemData) => {
    const isFavMeal = favoriteMeals.some(
      (meal) => meal.id === itemData.item.id     
    );
    console.log(itemData.item.id ,"6")

    console.log(isFavMeal);

    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        affrodability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavMeal,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={style.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  );
};

const style = StyleSheet.create({
  list: {
    width: "100%",
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
