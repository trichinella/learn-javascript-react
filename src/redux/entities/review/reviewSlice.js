import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit'
import { getReviewsByRestaurant } from "./getReviewsByRestaurant.js";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: 'review',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(getReviewsByRestaurant.fulfilled, (state, {payload}) => {
            entityAdapter.setMany(state, payload);
        })
    },
    selectors: {
        selectReviewState: (state) => state,
    },
})

export const {selectReviewState} = reviewSlice.selectors

export const selectReviewsByRestaurantId = createSelector([
    selectReviewState,
    (state, ids) => ids
], (state, ids) => {
    return ids.map(id => state.entities[id]).filter(entity => !!entity);
});

