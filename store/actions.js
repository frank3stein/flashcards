import { v4 as uuidv4 } from "uuid";
export const GET_DECKS = "GET_DECKS";
export const GET_DECK = "GET_DECK";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";
export const ADD_DECK = "ADD_DECK";

export const getDecks = () => {
  return {
    type: GET_DECKS,
  };
};

export const getDeck = (id) => {
  return {
    type: GET_DECK,
    id,
  };
};

export const addDeck = (title) => {
  return {
    type: ADD_DECK,
    deck: {
      title,
      cards: [],
      createdAt: Date.now(),
    },
  };
};

export const addCardToDeck = (title, card) => {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card: {
      front: card.front,
      back: card.back,
      id: uuidv4(),
    },
  };
};

// {
//     React: {
//       title: 'React',
//       questions: [
//         {
//           question: 'What is React?',
//           answer: 'A library for managing user interfaces'
//         },
//         {
//           question: 'Where do you make Ajax requests in React?',
//           answer: 'The componentDidMount lifecycle event'
//         }
//       ]
//     },
//     JavaScript: {
//       title: 'JavaScript',
//       questions: [
//         {
//           question: 'What is a closure?',
//           answer: 'The combination of a function and the lexical environment within which that function was declared.'
//         }
//       ]
//     }
//   }
