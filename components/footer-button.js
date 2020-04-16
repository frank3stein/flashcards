import React from "react";
import { View, Platform } from "react-native";
import styled, { css } from "@emotion/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Vuew = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

export default ({ navigation }) => {
  return (
    <Vuew>
      {Platform.OS === "ios" ? (
        <Ionicons
          name="ios-home"
          size={40}
          color="white"
          onPress={() => navigation.navigate("Home")}
        />
      ) : (
        <Ionicons
          name="md-home"
          size={40}
          color="white"
          onPress={() => navigation.navigate("Home")}
        />
      )}
      <MaterialCommunityIcons
        name="cards"
        size={40}
        color="white"
        onPress={() => navigation.navigate("Add Deck")}
      />
    </Vuew>
  );
};
