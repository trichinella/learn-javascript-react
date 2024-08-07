import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getRestaurants } from "./getRestaurants.js";
import { getRestaurantById } from "./getRestaurantById.js";
import { getDishesByRestaurant } from "../dish/getDishesByRestaurant.js";
import { getReviewsByRestaurant } from "../review/getReviewsByRestaurant.js";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(getDishesByRestaurant.fulfilled, (state, {meta}) => {
            state.entities[meta.arg].isDishesLoaded = true;
        })
        builder.addCase(getReviewsByRestaurant.fulfilled, (state, {meta}) => {
            state.entities[meta.arg].isReviewsLoaded = true;
        })
        builder.addCase(getRestaurants.fulfilled, (state, {payload}) => {
            entityAdapter.setAll(state, payload);
        })
        builder.addCase(getRestaurantById.fulfilled, (state, {payload}) => {
            entityAdapter.setOne(state, payload);
        })
    },
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantIds: (state) => state.ids,
        selectRestaurantDishesLoaded: (state, id) => !!state.entities[id].isDishesLoaded,
        selectRestaurantReviewsLoaded: (state, id) => !!state.entities[id].isReviewsLoaded,
    },
})

export const {
    selectRestaurantById,
    selectRestaurantIds,
    selectRestaurantDishesLoaded,
    selectRestaurantReviewsLoaded
} = restaurantSlice.selectors