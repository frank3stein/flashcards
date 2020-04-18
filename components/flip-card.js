import React from "react";
import { View, Text } from "react-native";
import styled, { css } from "@emotion/native";

const Vuew = styled.View`
  min-width: 50%;
  min-height: 50px;
  margin-top: 10px;
  border: 2px solid black;
  justify-content: center;
  align-items: center;
`;

export default ({ card, isFront }) => {
  return (
    <Vuew>
      <Text
        style={css`
          font-size: 2rem;
        `}
      >
        {isFront ? card.front : card.back}
      </Text>
    </Vuew>
  );
};
