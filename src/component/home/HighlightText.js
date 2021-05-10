import React from "react";
import { Text, View, ScrollView, Dimensions } from "react-native";
import { useFonts } from "expo-font";

import { bold } from "../../constant/index";

const HighlightText = () => {
  let [fontsLoaded] = useFonts({
    "Roboto-Bold": bold,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <View> .</View>
      </View>
    );
  } else {
    return (
      <View
        style={{
          marginLeft: 23,
          marginTop: 12,
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto-Bold",
          }}
        >
          Expenditure
        </Text>
      </View>
    );
  }
};

export default HighlightText;
