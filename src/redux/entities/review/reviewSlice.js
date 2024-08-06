import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit'
import { getReviewsByRestaurant } from "./getReviewsByRestaurant.js";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        ...entityAdapter.getInitialState(),
        restaurants: {},
    },
    extraReducers: (builder) => {
        builder.addCase(getReviewsByRestaurant.fulfilled, (state, {payload, meta}) => {
            entityAdapter.setMany(state, payload);
            state.restaurants[meta.arg] = true;
        })
    },
    selectors: {
        selectReviewState: (state) => state,
        hasReviewsByRestaurantId: (state, restaurantId) => !!state.restaurants[restaurantId],
    },
})

export const {selectReviewState, hasReviewsByRestaurantId} = reviewSlice.selectors

export const selectReviewsByRestaurantId = createSelector([
    selectReviewState,
    (state, ids) => ids
], (state, ids) => {
    return ids.map(id => state.entities[id]).filter(entity => !!entity);
});

