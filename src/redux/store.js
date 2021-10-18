import { createStore } from "redux";
import rootReducer from "./reducer";

export const saveToLocalStorage = () => {
    return null
}

export const loadFromLocalStorage = () => {
    return null
}

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
