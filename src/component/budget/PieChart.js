import React from "react";
import { View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import { bgColor } from "../../constant/index";

const PieChartComp = () => {
  const data = [
    {
      name: "House Bills",
      P: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },

    {
      name: "Food & Drink",
      P: 8538000,
      color: "#ED5B22",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Internet Bills",
      P: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  return (
    <ScrollView
      style={{
        backgroundColor: { bgColor },
        flex: 1,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          width: "90%",
          marginVertical: 17,
          marginHorizontal: "auto",
          backgroundColor: "#ffffff",
          borderRadius: 23,
        }}
      >
        <PieChart
          data={data}
          accessor={"P"}
          width={Dimensions.get("window").width - 40}
          backgroundColor={"transparent"}
          height={170}
          chartConfig={{
            backgroundColor: { bgColor },
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 2,
            color: (opacity = 0.5) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 18,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default PieChartComp;
