import React from "react";
import View from "./view";
import DeckCard from "../components/deck-card";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
// import {} from "@react-navigation";
import DeckView from "./deck-view";
import AddCard from "./add-card";

const config = {
  headerBackButton: false,
  headerText: "Main",
  footerButtons: true,
  footer: true,
  header: true,
};

const Stack = createStackNavigator();

// const Home = (config) => (
//   <View {...config} {...props}>
//     {Object.values(decks).map((deck, index) => (
//       <DeckCard deck={deck} key={index} />
//     ))}
//   </View>
// );

export default function Home(props) {
  const decks = useSelector((state) => state);
  return (
    // <View {...config} {...props}>
    //   {Object.values(decks).map((deck, index) => (
    //     <DeckCard deck={deck} key={index} />
    //   ))}
    // </View>

    // Since it merges the objects, the rightmost merge wins. I tested it with id properties on deckcard
    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="decks"
    //     render={(decks, config, ...props) => (
    <View {...config} {...props}>
      {Object.values(decks).map((deck, index) => (
        <DeckCard deck={deck} key={index} />
      ))}
    </View>
    //     )}
    //   />
    // </Stack.Navigator>
  );
}
