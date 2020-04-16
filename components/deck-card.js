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

//deck id which is title
export default ({ deck }) => {
  const numberOfCards = deck.cards.length;
  return (
    <Vuew>
      <Text
        style={css`
          font-size: 2rem;
        `}
      >
        {deck.title}
      </Text>
      <Text>Cards in the deck: {numberOfCards}</Text>
    </Vuew>
  );
};
