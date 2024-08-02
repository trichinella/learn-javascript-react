import { createSlice } from '@reduxjs/toolkit'
import { normalizedRestaurants } from "../../../materials/normalized-mock.js";

const initialState = {
    entities: normalizedRestaurants.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}),
    ids: normalizedRestaurants.map(({id}) => id),
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantIds: (state) => state.ids,
    },
})

export const {selectRestaurantById, selectRestaurantIds} = restaurantSlice.selectors