import React from "react";
import { View, Platform, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled, { css } from "@emotion/native";

const Vuew = styled.View`
  left: 15;
  position: absolute;
  flex-direction: row;
  align-items: center;
  position: absolute;
`;

export default ({ headerBackButtonText }) => {
  return (
    <Vuew>
      {Platform.OS === "ios" ? (
        <AntDesign name="chevron-left" size={40} color="white" />
      ) : (
        <AntDesign name="left" size={40} color="white" />
      )}
      <Text
        style={{
          fontSize: "1rem",
          color: "white",
          position: "relative",
          left: "-10px",
        }}
      >
        {headerBackButtonText}
      </Text>
    </Vuew>
  );
};
