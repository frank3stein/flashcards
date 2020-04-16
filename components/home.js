import React from "react";
import { View } from "react-native";
import styled, { css } from "@emotion/native";

const Vuew = styled.View`
  flex: 9;
  background-color: red;
  width: 100vw;
  justify-content: flex-start;
  align-items: center;
  &::first-child {
    padding-top: 5%;
  }
`;

export default (props) => {
  return <Vuew>{props.children}</Vuew>;
};
