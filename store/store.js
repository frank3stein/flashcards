import AsyncStorage from "@react-native-community/async-storage";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { decks } from "./reducers";
import logger from "redux-logger";
import { addDeck, addCardToDeck } from "./actions";

const store = createStore(decks, applyMiddleware(thunk, logger));

store.dispatch(addDeck("Deck 2"));
store.dispatch(addDeck("Deck 3"));
store.dispatch(addDeck("Deck 4"));
store.dispatch(addCardToDeck("Deck 2", { front: "front", back: "back" }));
store.dispatch(addCardToDeck("Deck 2", { front: "front", back: "back" }));
store.dispatch(addCardToDeck("Deck 2", { front: "front", back: "back" }));
store.dispatch(addCardToDeck("Deck 2", { front: "front", back: "back" }));

export default store;
