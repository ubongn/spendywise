import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import { navyBlue, bold, thin, medium, lightBlue } from "../../constant/index";

const ListExpences = ({iconName, text, amount}) => {
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
                <Feather name={iconName} size={18} color="white" />
              }
              containerStyle={{
                backgroundColor: "#13168b",
                borderRadius: 10,
                width: 35,
                height: 35,
              }}
            />
          </View>
          <View style={styles.TextArea}>
            <Text style={styles.tabText1}>{text}</Text>
            <Text style={styles.tabText2}>27 March 2021</Text>
          </View>
        </View>
        <View style={styles.tabRight}>
          <View style={styles.tabIcon}>
            <Button
              type="clear"
              icon={
                <Feather name="arrow-up-right" size={15} color={lightBlue} />
              }
              containerStyle={{
                backgroundColor: "#e5e6ed",
                borderRadius: 23,
                width: 28,
                height: 28,
            
              }}
            />
          </View>
          <View style={styles.TextArea}>
            <Text style={styles.tabText22}>{amount}</Text>
          </View>
        </View>
      </View>
    );
  }
};

export default ListExpences;

const styles = StyleSheet.create({
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tabRight: {
    width: "45%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 15,
  },
  tabText1: {
    fontFamily: "Roboto-Bold",
    marginBottom: 4,
  },
  tabText2: {
    fontFamily: "Roboto-Thin",
    fontSize: 10,
  },
  tabText22: {
    fontFamily: "Roboto-Bold",
    fontSize: 14,
    marginTop:5
  },
});
