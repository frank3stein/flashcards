import React from "react";
import Home from "./home-view";
import { createStackNavigator } from "@react-navigation/stack";
import Deck from "./deck-stack";
import AddCard from "./add-card-stack";
import StartQuiz from "./start-quiz";
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          alignSelf: "center",
        },
      }}
    >
      <Stack.Screen name="Home" options={{ title: "Home" }} component={Home} />
      <Stack.Screen
        name="Deck"
        // using the data we passed in with the route
        options={({ route }) => ({ title: route.params.deck.title })}
        component={Deck}
      />
      <Stack.Screen
        name="AddCard"
        options={{ title: "Add Card" }}
        component={AddCard}
      />
      <Stack.Screen
        name="StartQuiz"
        options={{ title: "Start Quiz" }}
        component={StartQuiz}
      />
    </Stack.Navigator>
  );
};
