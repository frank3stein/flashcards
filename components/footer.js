import React from "react";
import styled, { css } from "@emotion/native";
import { View, Text } from "react-native";
import FooterButton from "./footer-button";

// Since we have the tab navigator we do not need tab navigation

const Vuew = styled.View`
  flex: 1;
  height: 15%;
  width: 100vw;
  background-color: yellowgreen;
  justify-content: center;
  align-items: center;
`;

export default ({ footerButtons }) => {
  return (
    <Vuew>
      <View
        style={css`
          flex: 1;
          width: 30%;
        `}
      >
        {footerButtons && <FooterButton />}
      </View>
    </Vuew>
  );
};
