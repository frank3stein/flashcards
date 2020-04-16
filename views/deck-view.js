import React from "react";
import View from "./view";
import DeckCard from "../components/deck-card";
import Button from "../components/button";
import { useSelector } from "react-redux";
const config = {
  // default values
  headerBackButton: true,
  headerText: "Deck Header Default",
  footerButtons: false,
  footer: true,
  header: true,
};

export default ({ id, ...props }) => {
  //deck id
  const deck = useSelector((state) => state[id]);
  config.headerText = id;
  return (
    // Since it merges the objects, the rightmost merge wins. I tested it with id properties on deckcard
    <View {...config} {...props}>
      <DeckCard deck={deck} />
      <Button title="Add Card" />
      <Button title="Start Quiz" />
      <Button title="Delete Deck" color="transparent" />
    </View>
  );
};
