import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit'
import { getDishesByRestaurant } from "./getDishesByRestaurant.js";
import { getDishById } from "./getDishById.js";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        ...entityAdapter.getInitialState(),
        restaurants: {},
    },
    extraReducers: (builder) => {
        builder.addCase(getDishesByRestaurant.fulfilled, (state, {payload, meta}) => {
            entityAdapter.setMany(state, payload);
            state.restaurants[meta.arg] = true;
        })
        builder.addCase(getDishById.fulfilled, (state, {payload}) => {
            entityAdapter.setOne(state, payload);
        })
    },
    selectors: {
        selectDishState: (state) => state,
        selectDishById: (state, id) => state.entities[id],
        hasDishesByRestaurantId: (state, restaurantId) => !!state.restaurants[restaurantId],
    },
});

export const {selectDishById, selectDishState,hasDishesByRestaurantId} = dishSlice.selectors

export const selectDishesByIds = createSelector([
    selectDishState,
    (state, ids) => ids
], (state, ids) => {
    return ids.map(id => state.entities[id]).filter(entity => !!entity);
});
