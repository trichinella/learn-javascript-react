import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit'
import { getDishesByRestaurant } from "./getDishesByRestaurant.js";
import { getDishById } from "./getDishById.js";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(getDishesByRestaurant.fulfilled, (state, {payload}) => {
            entityAdapter.setMany(state, payload);
        })
        builder.addCase(getDishById.fulfilled, (state, {payload}) => {
            entityAdapter.setOne(state, payload);
        })
    },
    selectors: {
        selectDishState: (state) => state,
        selectDishById: (state, id) => state.entities[id],
    },
});

export const {selectDishById, selectDishState} = dishSlice.selectors

export const selectDishesByIds = createSelector([
    selectDishState,
    (state, ids) => ids
], (state, ids) => {
    return ids.map(id => state.entities[id]).filter(entity => !!entity);
});
