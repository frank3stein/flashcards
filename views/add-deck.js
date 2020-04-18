import React, { useEffect } from "react";
import { Text, TextInput } from "react-native";
import View from "./view";
import DeckCard from "../components/deck-card";
import Button from "../components/button";
import { useDispatch } from "react-redux";
import { addDeck } from "../store/actions";
import { _addDeck } from "../store/actions";
const config = {
  headerBackButton: false,
  headerText: "Add Deck",
  footerButtons: true,
  footer: true,
  header: true,
};

export default ({ navigation, ...props }) => {
  const [deck, onChangeDeck] = React.useState("Deck");
  const dispatch = useDispatch();
  return (
    // Since it merges the objects, the rightmost merge wins. I tested it with id properties on deckcard
    <View {...config} {...props}>
      <Text>What is the title of your new deck?</Text>
      <TextInput
        clearTextOnFocus={true}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(deck) => onChangeDeck(deck)}
        value={deck}
      />
      <Button
        title="Create Deck"
        onPress={() => {
          const newDeck = dispatch(_addDeck(deck));
          navigation.navigate("Deck", { deck: newDeck });
        }}
      />
    </View>
  );
};
