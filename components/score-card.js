import React from "react";
import { View, Text } from "react-native";
// import styled, { css } from "@emotion/native";

// const Vuew = styled.View`
//   min-width: 50%;
//   min-height: 50px;
//   margin-top: 10px;
//   border: 2px solid black;
//   justify-content: center;
//   align-items: center;
// `;

export default ({ score, cardsRemaining, ...props }) => {
  return (
    <>{cardsRemaining < 0 ? <Text>Score is {score}</Text> : props.children}</>
  );
};
