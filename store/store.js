import AsyncStorage from "@react-native-community/async-storage";
import { createStore, applyMiddleware } from "redux";
import { decks } from "./reducers";
import logger from "redux-logger";
import { _addDeck, addCardToDeck } from "./actions";
import thunk from "redux-thunk";
const store = createStore(decks, applyMiddleware(thunk, logger));

store.dispatch(_addDeck("Deck 2"));
store.dispatch(_addDeck("Deck 3"));
store.dispatch(_addDeck("Deck 4"));
const state = store.getState();
const deckz = Object.keys(state);
store.dispatch(addCardToDeck(deckz[0], { front: "1", back: "back 1" }));
store.dispatch(addCardToDeck(deckz[1], { front: "2", back: "back 2" }));
store.dispatch(addCardToDeck(deckz[2], { front: "3", back: "back 3" }));
store.dispatch(addCardToDeck(deckz[0], { front: "4", back: "back 4" }));

export default store;
