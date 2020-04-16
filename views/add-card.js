import React from "react";
import View from "./view";
import { TextInput } from "react-native";
import Button from "../components/button";
const config = {
  headerBackButton: true,
  headerBackButtonText: "Deck 1",
  headerText: "Add Card",
  footerButtons: false,
  footer: true,
  header: true,
};

export default (props) => {
  const [question, onChangeQuestion] = React.useState("Q3");
  const [answer, onChangeAnswer] = React.useState("A3");
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
      <Button title="Submit" />
    </View>
  );
};
