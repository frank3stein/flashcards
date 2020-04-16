import React from "react";
import { View } from "react-native";
import Home from "../components/home";
import Header from "../components/header";
import Footer from "../components/footer";
import styled, { css } from "@emotion/native";
import DeckCard from "../components/deck-card";
// import { NativeRouter, Route } from "react-router-native";

const Vuew = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ({
  headerBackButton,
  headerBackButtonText,
  headerText,
  footerButtons,
  footer,
  header,
  children,
}) => {
  return (
    <Vuew>
      {header && (
        <Header
          headerBackButton={headerBackButton}
          headerText={headerText}
          headerBackButtonText={headerBackButtonText}
        />
      )}
      <Home style={css``}>{children}</Home>
      {/* Permenantly remove footer as with Tab navigator we do not need it. */}
      {false && <Footer style={css``} footerButtons={footerButtons} />}
    </Vuew>
  );
};
