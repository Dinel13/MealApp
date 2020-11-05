import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoryScreen from "../screens/CategoryScreen";
import CategoryMealScren from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealsDetailScreen";
import FilterScreen from "../screens/FilterSCreen";

import Color from "../constants/color";
import FavoriteScreen from "../screens/FaforiteScreen";

const defaultConfigStackNaviganition = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Color.primary : "", //kosong berarti default
  },
  headerTitleScreen: {
    fontFamily: "open-sans-bold",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Color.primary,
};

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoryScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoriMeals: {
      screen: CategoryMealScren,
    },
    MealDetail: MealDetailScreen,
  },
  {
    //initialRouteName,
    //mode
    defaultNavigationOptions: defaultConfigStackNaviganition,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorite: FavoriteScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultConfigStackNaviganition,
  }
);

const tabScreenConbfig = {
  Meals: {
    screen: MealNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Favorite: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
};

const MealsFavNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConbfig, {
        activeColor: Color.accent,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConbfig, {
        tabBarOptions: {
          activeTintColor: Color.accent,
        },
        labelStyle: {
          fontFamily: "open-sans-bold",
        },
      });

const filterNavigator = createStackNavigator(
  {
    Filter: FilterScreen,
  },
  {
    defaultNavigationOptions: defaultConfigStackNaviganition,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filter: filterNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Color.accent,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

//HANYA ADA STU ROOT NAVIGATOR
export default createAppContainer(MainNavigator);
