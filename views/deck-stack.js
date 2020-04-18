import React, { useState } from "react";
import View from "./view";
import DeckCard from "../components/deck-card";
import Button from "../components/button";
import { useSelector } from "react-redux";
import { TouchableHighlight } from "react-native-gesture-handler";

const config = {
  // default values
  headerBackButton: true,
  headerText: "Deck Header Default",
  footerButtons: false,
  footer: false,
  header: false,
};

export default ({ route, navigation, ...props }) => {
  // id is returned when a new deck is created
  let { deck } = route.params;
  deck = useSelector((state) => state[deck.id]);
  return (
    // Since it merges the objects, the rightmost merge wins. I tested it with id properties on deckcard
    <View {...config} {...props}>
      <DeckCard deck={deck} />
      <TouchableHighlight
        onPress={() => navigation.navigate("AddCard", { deck })}
      >
        <Button title="Add Card" color="blue" />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("StartQuiz", { deck })}
      >
        <Button title="Start Quiz" />
      </TouchableHighlight>
      <Button title="Delete Deck" color="transparent" />
    </View>
  );
};
