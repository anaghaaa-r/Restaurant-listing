import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restaurantReducer";

const reducers = combineReducers({
    restaurantReducer: restaurantListReducer
    // key-name: reducer-name of other actions
})

const middleWare = [thunk]

const store = createStore(reducers, applyMiddleware(...middleWare))


export default store