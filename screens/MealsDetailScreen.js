import React, { useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import DeafultTetx from "../components/DeafultText";
import { toggleFavorite } from "../store/action/actionMeals";

const ListItem = (props) => {
  return (
    <View style={style.ListItem}>
      <DeafultTetx>{props.children}</DeafultTetx>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const itemId = props.navigation.getParam("mealId");
  const isCurentMealsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === itemId)
  );
  const detailMeal = availableMeals.find((meal) => meal.id === itemId);

  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavorite(itemId));
  }, [dispatch, itemId]);

  //dengan cara begini lamabt tampil karena harus setelah life cyle render
  useEffect(() => {
    //unutk diteruskan ke navigation - cara komunikasi
    props.navigation.setParams({ togleFav: toggleFavHandler });
  }, [toggleFavHandler]);

 
  return (
    <ScrollView>
      <Image source={{ uri: detailMeal.imageUrl }} style={style.image} />
      <View style={style.detail}>
        <DeafultTetx>{detailMeal.duration}m</DeafultTetx>
        <DeafultTetx>{detailMeal.complexity.toUpperCase()}</DeafultTetx>
        <DeafultTetx>{detailMeal.affordability.toUpperCase()}</DeafultTetx>
      </View>
      <Text style={style.title}>Incrediats</Text>
      {detailMeal.ingrdieant.map((ingrdieant) => (
        <ListItem key={ingrdieant}>{ingrdieant}</ListItem>
      ))}
      <Text style={style.title}>Steps</Text>
      {detailMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const itemTitle = navigationData.navigation.getParam("mealTitle");
  const togleFavFunction = navigationData.navigation.getParam("togleFav");
  const isFavaorite = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: itemTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName={ isFavaorite ? "ios-star" : "ios-star-outline" } onPress={togleFavFunction} />
      </HeaderButtons>
    ),
  };
};

const style = StyleSheet.create({
  detail: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  ListItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
