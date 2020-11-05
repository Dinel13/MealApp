import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableNow = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 22) {
    TouchableNow = TouchableNativeFeedback;
  }
  return (
    <View style={style.gridItem}>
      <TouchableNow onPress={props.onSelect}>
        <View
          style={{ ...style.conatainer, ...{ backgroundColor: props.color } }}
        >
          <Text style={style.title}>{props.title}</Text>
        </View>
      </TouchableNow>
    </View>
  );
};

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  conatainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    elevation: 3,
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoryGridTile;
