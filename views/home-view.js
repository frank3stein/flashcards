import React from "react";
import View from "./view";
import DeckCard from "../components/deck-card";
import { useSelector } from "react-redux";
import { TouchableHighlight } from "react-native-gesture-handler";

// const config = {
//   headerBackButton: false,
//   headerText: "Main",
//   footerButtons: true,
//   footer: true,
//   header: true,
// };

export default ({ config, navigation: { navigate }, ...props }) => {
  const decks = useSelector((state) => state);
  return (
    <View {...config} {...props}>
      {Object.values(decks).map((deck) => (
        <TouchableHighlight
          onPress={() => navigate("Deck", { deck })}
          key={"touch-" + deck.id}
        >
          <DeckCard deck={deck} key={deck.id} />
        </TouchableHighlight>
      ))}
    </View>
  );
};
