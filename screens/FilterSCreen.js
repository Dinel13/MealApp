import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {useDispatch} from 'react-redux'

import HeaderButton from "../components/HeaderButton";
import color from "../constants/color";
import { setFilter } from "../store/action/actionMeals";

const FilterSwitch = (props) => {
  
  return (
    <View style={style.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={Platform.OS === "android" ? "" : { true: color.primary }}
        thumbColor={Platform.OS === "android" ? color.primary : ""}
        value={props.value}
        onValueChange={props.onChang}
      />
    </View>
  );
};

const FilterScreen = props => {

  //supaay hanya berubah karena component ini buyjkan dari parant
  const {navigation } = props

  const [isGluteFree, setisGluteFree] = useState(false);
  const [isLactoseree, setisLactoseFree] = useState(false);
  const [isVegan, setisVgan] = useState(false);
  const [isVegetarian, setisVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilter = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGluteFree,
      lactoseFree: isLactoseree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilter(appliedFilters))
  }, [isVegetarian, isLactoseree, isGluteFree, isVegan , dispatch]);

  useEffect(() => {
    navigation.setParams({
      save : saveFilter
    })
  }, [saveFilter])

  return (
    <View style={style.screen}>
      <Text style={style.title}> Available Filter /Restriction</Text>
      <FilterSwitch
        label="Gluten free"
        value={isGluteFree}
        onChang={(newValue) => setisGluteFree(newValue)}
      />
      <FilterSwitch
        label="Lactose free"
        value={isLactoseree}
        onChang={(newValue) => setisLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChang={(newValue) => setisVgan(newValue)}
      />
      <FilterSwitch
        label="Vegeatrian"
        value={isVegetarian}
        onChang={(newValue) => setisVegetarian(newValue)}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    heeaderTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    ),
  };
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});

export default FilterScreen;
