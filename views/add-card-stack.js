import React from "react";
import View from "./view";
import { TextInput } from "react-native";
import Button from "../components/button";
import { addCardToDeck } from "../store/actions";
import { useDispatch } from "react-redux";
const config = {
  headerBackButton: true,
  headerBackButtonText: "Deck 1",
  headerText: "Add Card",
  footerButtons: false,
  footer: false,
  header: false,
};

export default ({ route, navigation, ...props }) => {
  const [question, onChangeQuestion] = React.useState("Q3");
  const [answer, onChangeAnswer] = React.useState("A3");
  const { deck } = route.params;
  const dispatch = useDispatch();
  return (
    // Since it merges the objects, the rightmost merge wins. I tested it with id properties on deckcard
    <View {...config} {...props}>
      <TextInput
        clearTextOnFocus={true}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeQuestion(text)}
        value={question}
      />
      <TextInput
        clearTextOnFocus={true}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeAnswer(text)}
        value={answer}
      />
      <Button
        title="Add Card"
        accessibilityLabel="Add the card to deck"
        onPress={() => {
          // TODO: Dispatch add card action
          dispatch(
            addCardToDeck(deck.id, {
              front: question,
              back: answer,
            })
          );
          navigation.goBack();
        }}
      />
    </View>
  );
};
