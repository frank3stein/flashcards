import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import styled, { css } from "@emotion/native";
import Home from "./views/home-stack";
import AddDeck from "./views/add-deck";
import store from "./store/store";
import { Provider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { NativeRouter, Route } from "react-router-native";
import { setLocalNotification } from "./helper";

const Vuew = styled.View`
  flex: 1;
`;

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    setLocalNotification();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Vuew>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = "ios-home";
                  return <Ionicons name={iconName} size={size} color={color} />;
                } else if (route.name === "Add Deck") {
                  iconName = "cards";
                  return (
                    <MaterialCommunityIcons
                      name="cards"
                      size={size}
                      color={color}
                    />
                  );
                }

                // You can return any component that you like here!
              },
            })}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            {/* <HomeView
              style={css``}
              header={true}
              footer={true}
              headerBackButton={false}
              footerButtons={true}
              name="Home"
            /> */}
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Add Deck" component={AddDeck} />
          </Tab.Navigator>
          {/* <AddDeck name="Add Deck" /> */}
          {/* <DeckView id="Deck 2" /> */}
          {/* <AddCard /> */}
        </Vuew>
      </NavigationContainer>
    </Provider>
  );
}
