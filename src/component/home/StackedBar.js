import React from "react";
import { View, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { StackedBarChart } from "react-native-chart-kit";

import { bgColor, bold, thin, medium } from "../../constant/index";

const StackedBar = () => {
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
      <View
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <StackedBarChart
          data={{
            labels: ["Jan", "Feb"],
            legend: ["Net Income", "Expenditure"],
            data: [
              [60, 60],
              [30, 30],
            ],
            barColors: ["#131680", "#486ba6"],
          }}
          width={Dimensions.get("window").width - 23}
          height={220}
          chartConfig={{
            backgroundColor: { bgColor },
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 2,
            color: (opacity = 0.5) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    );
  }
};

export default StackedBar;
