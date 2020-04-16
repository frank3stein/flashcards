import React from "react";
import { View, Text, Button } from "react-native";
import styled, { css } from "@emotion/native";

const Vuew = styled.View``;

export default ({
  title = "Button",
  color = "blue",
  a11yLabel,
  onPress = () => {},
}) => {
  if (a11yLabel === undefined) {
    a11yLabel = title;
  }

  return (
    <Button
      title={title}
      color={color}
      accessibilityLabel={a11yLabel}
      onPress={onPress}
    />
  );
};
