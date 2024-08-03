import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getRestaurants } from "./getRestaurants.js";
import { getRestaurantById } from "./getRestaurantById.js";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>{
        builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        })
        builder.addCase(getRestaurantById.fulfilled, (state, { payload }) => {
            entityAdapter.setOne(state, payload);
        })
    },
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantIds: (state) => state.ids,
    },
})

export const {selectRestaurantById, selectRestaurantIds} = restaurantSlice.selectors