import { GET_DECK, GET_DECKS, ADD_CARD_TO_DECK, ADD_DECK } from "./actions";

export const decks = (state = {}, action) => {
  switch (action.type) {
    case GET_DECK:
      return {
        ...state[action.id],
      };
    case GET_DECKS:
      return {
        state,
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: { ...action.deck },
      };
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          cards: state[action.id]["cards"].concat(action.card),
        },
      };
    default:
      return state;
  }
};
