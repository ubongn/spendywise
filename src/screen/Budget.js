import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import {
  bgColor,
  hBgColor,
  navyBlue,
  lightBlue,
  textColor,
  bold,
  thin,
  medium,
  light,
  yellow,
} from "../constant/index";
import PieChartComp from "../component/budget/PieChart";
import HighlightText from "../component/home/HighlightText";
import ListExpences from "../component/home/ListExpences";
const Budget = () => {
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
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Header
            leftComponent={
              <FontAwesome name="plus-circle" size={24} color={yellow} />
            }
            centerComponent={{
              text: "Budgeting",
              style: { color: { textColor }, marginTop: 5 },
            }}
            rightComponent={
              <Entypo name="dots-three-horizontal" size={24} color="black" />
            }
            containerStyle={{
              backgroundColor: { bgColor },
              justifyContent: "space-evenly",
            }}
          />

          <PieChartComp />
          <HighlightText />
          <ListExpences
            iconName="home-roof"
            text="Car RXP"
            amount="&#8358;3200"
            progress={true}
          />
          <ListExpences
            iconName="home"
            text="Car RXP"
            amount="&#8358;3200"
            progress={true}
          />
          <ListExpences
            iconName="home-repair-service"
            text="Car RXP"
            progress={true}
            amount="&#8358;3200"
          />

          <ListExpences
            iconName="home-roof"
            text="Car RXP"
            amount="&#8358;3200"
            progress={true}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
};

export default Budget;

const styles = StyleSheet.create({});
