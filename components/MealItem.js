import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import DeafultTetx from "./DeafultText";

const MealItem = (props) => {
  return (
    <View style={style.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...style.mealRow, ...style.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={style.bgImage}
            >
              <Text style={style.title} numberOfLines={1}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...style.mealRow, ...style.mealDetail }}>
            <DeafultTetx>{props.duration}m</DeafultTetx>
            <DeafultTetx>{props.complexity.toUpperCase()}</DeafultTetx>
            <DeafultTetx>{props.affrodability.toUpperCase()}</DeafultTetx>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  mealItem: {
    height: 200,
    width: 300,
    backgroundColor: "#e0f0f0",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 10
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
});

export default MealItem;
