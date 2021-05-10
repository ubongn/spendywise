import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import { useFonts } from "expo-font";

import { bgColor, textColor, bold, thin, medium } from "../constant/index";
import TopArea from "../component/home/TopArea";
import StackedBar from "../component/home/StackedBar";
import HighlightText from "../component/home/HighlightText";
import ListExpences from "../component/home/ListExpences";

const Home = () => {
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
            leftComponent={{ icon: "menu", color: { textColor } }}
            centerComponent={{
              text: "Spendy",
              style: { color: { textColor }, marginTop: 5 },
            }}
            rightComponent={{ icon: "notifications", color: "gray" }}
            containerStyle={{
              backgroundColor: { bgColor },
              justifyContent: "space-around",
            }}
          />
          <View style={styles.topArea}>
            <Text style={styles.topAreaText}>&#8358;3,500</Text>
            <Text style={styles.topAreaText2}>You spent 45% Income</Text>
          </View>

          <TopArea />
          <StackedBar />
          <HighlightText />
          <ListExpences iconName="home" text="Car RXP" amount="&#8358;799" />
          <ListExpences iconName="home" text="Food" amount="&#8358;950" />
          <ListExpences iconName="home" text="Family" amount="&#8358;455" />
        </SafeAreaView>
      </ScrollView>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: { bgColor },
  },
  topArea: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  topAreaText: {
    fontSize: 24,
    marginBottom: 12,
    color: { textColor },
    fontFamily: "Roboto-Bold",
  },
  topAreaText2: {
    fontSize: 12,
    marginBottom: 12,
    color: { textColor },
    fontFamily: "Roboto-Thin",
  },
});
