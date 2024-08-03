import { createSelector, createSlice } from '@reduxjs/toolkit'
import { getReviewsByRestaurant } from "./getReviewsByRestaurant.js";

const initialState = {
    entitiesByRestaurants: {},
};

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getReviewsByRestaurant.fulfilled, (state, {payload, meta}) => {
            state.entitiesByRestaurants[meta.arg] = payload;
        })
    },
    selectors: {
        selectReviewState: (state) => state,
    },
})

export const {selectReviewState} = reviewSlice.selectors


export const selectReviewsByRestaurantId = createSelector([
    selectReviewState,
    (state, restaurantId) => restaurantId
], (state, restaurantId) => {
    return state.entitiesByRestaurants[restaurantId] ?? [];
});

