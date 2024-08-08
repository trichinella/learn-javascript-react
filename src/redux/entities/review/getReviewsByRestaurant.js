import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewsLoaded } from "../restaurant/restaurantSlice.js";

export const getReviewsByRestaurant = createAsyncThunk(
    "review/getReviewsByRestaurant",
    async (restaurantId, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("empty result");
        }

        return result;
    },
    {
        condition: (restaurantId, {getState}) => {
            return !selectRestaurantReviewsLoaded(getState(), restaurantId);
        },
    }
);