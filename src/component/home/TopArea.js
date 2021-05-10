import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import {
  navyBlue,
  bold,
  thin,
  medium,
} from "../../constant/index";

const TopArea = () => {
  let [fontsLoaded] = useFonts({
    "Roboto-Bold": bold,
    "Roboto-Thin": thin,
    "Roboto-Medium": medium,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <View> .</View>
      </View>
    );
  } else {
    return (
      <View style={styles.tabContainer}>
        <View style={styles.tabRight}>
          <View style={styles.tabIcon}>
            <Button
              type="clear"
              icon={
                <Feather name="arrow-down-left" size={18} color={navyBlue} />
              }
              containerStyle={{
                backgroundColor: "#e5e6ed",
                width: 35,
                height: 35,
              }}
            />
          </View>
          <View style={styles.TextArea}>
            <Text style={styles.tabText1}>Net Income</Text>
            <Text style={styles.tabText2}>&#8358;3200</Text>
          </View>
        </View>
        <View style={styles.tabRight}>
          <View style={styles.tabIcon}>
            <Button
              type="clear"
              icon={
                <Feather name="arrow-up-right" size={18} color={navyBlue} />
              }
              containerStyle={{
                backgroundColor: "#e5e6ed",
                width: 35,
                height: 35,
              }}
            />
          </View>
          <View style={styles.TextArea}>
            <Text style={styles.tabText1}>Expenditure</Text>
            <Text style={styles.tabText2}>&#8358;2700</Text>
          </View>
        </View>
      </View>
    );
  }
};

export default TopArea;

const styles = StyleSheet.create({
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tabRight: {
    backgroundColor: "white",
    width: "45%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 15,
  },
  tabText1: {
    fontFamily: "Roboto-Thin",
    marginBottom: 4,
  },
  tabText2: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
  },
});
