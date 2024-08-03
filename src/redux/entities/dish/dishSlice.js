import { createSelector, createSlice } from '@reduxjs/toolkit'
import { getDishesByRestaurant } from "./getDishesByRestaurant.js";
import { getDishById } from "./getDishById.js";

const initialState = {
    entities: {},
    entitiesByRestaurants: {},
};

export const dishSlice = createSlice({
    name: 'dish',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getDishesByRestaurant.fulfilled, (state, {payload, meta}) => {
            state.entities = payload.reduce((acc, item) => {
                acc[item.id] = item;

                return acc;
            }, state.entities);
            state.entitiesByRestaurants[meta.arg] = payload;
        })
        builder.addCase(getDishById.fulfilled, (state, {payload, meta}) => {
            state.entities[meta.arg] = payload;
        })
    },
    selectors: {
        selectDishState: (state) => state,
        selectDishById: (state, id) => state.entities[id],
    },
});

export const {selectDishState, selectDishById} = dishSlice.selectors

export const selectDishesByRestaurantId = createSelector([
    selectDishState,
    (state, restaurantId) => restaurantId
], (state, restaurantId) => {
    return state.entitiesByRestaurants[restaurantId] ?? [];
});

