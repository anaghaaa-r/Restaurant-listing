import { RESTAURANT_LIST_SUCCESS, RESTAURANT_LIST_FAIL } from "../constants/constants";


export const restaurantListReducer = (state = { resto: [] }, action) => {
    switch(action.type)
    {
        case RESTAURANT_LIST_SUCCESS:
            return { resto: action.payload }
        case RESTAURANT_LIST_FAIL:
            return { error: action.payload }
        default:
            return state
    }
}