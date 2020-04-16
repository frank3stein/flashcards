import React from "react";
import styled, { css } from "@emotion/native";
import { View, Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "./back-button";

const Vuew = styled.View`
  background-color: blue;
  flex: 1;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export default ({
  headerBackButton,
  headerText = `View`,
  headerBackButtonText,
}) => {
  return (
    <Vuew>
      {headerBackButton && (
        <BackButton headerBackButtonText={headerBackButtonText} />
      )}
      <Text
        style={css`
          flex: 1;
          font-size: 1.5rem;
          text-align: center;
          color: whitesmoke;
        `}
      >
        {headerText}
      </Text>
    </Vuew>
  );
};
