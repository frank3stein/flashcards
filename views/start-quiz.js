import React, { useState, useEffect } from "react";
import View from "./view";
import DeckCard from "../components/deck-card";
import Button from "../components/button";
import { useSelector } from "react-redux";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Text } from "react-native";
import FlipCard from "../components/flip-card";
import ScoreCard from "../components/score-card";

const config = {
  // default values
  headerBackButton: false,
  headerText: "Deck Header Default",
  footerButtons: false,
  footer: false,
  header: false,
};

export default ({ route, navigation, ...props }) => {
  //deck id
  const [isFront, setIsFront] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const { deck } = route.params;
  const cards = deck.cards;
  const cardsRemaining = cards.length - index - 1;
  useEffect(() => {
    setIsFront(true);
    setIsFlipped(false);
  }, [index]);
  const freshDeck = useSelector((state) => state[deck.id]);
  console.log(deck);
  config.headerText = deck.id;
  return (
    <View {...config} {...props}>
      <ScoreCard score={score} cardsRemaining={cardsRemaining}>
        {cards.length > 0 ? (
          <>
            <Text>Card #: {index + 1}</Text>
            <FlipCard card={cards[index]} isFront={isFront} />
            <Text>Cards remaining: {cardsRemaining}</Text>
            <TouchableHighlight>
              <Button
                title={isFront ? "Show Answer" : "Back to Question"}
                color="green"
                onPress={() => {
                  setIsFlipped(true);
                  setIsFront(!isFront);
                }}
              />
            </TouchableHighlight>
            {isFlipped && (
              <>
                <Button
                  title="True"
                  color="green"
                  onPress={() => {
                    setScore(score + 1);
                    setIndex(index + 1);
                  }}
                />
                <Button
                  title="False"
                  color="red"
                  onPress={() => {
                    setIndex(index + 1);
                  }}
                />
              </>
            )}
          </>
        ) : (
          <Text>There are no cards in this deck. </Text>
        )}
      </ScoreCard>
    </View>
  );
};
