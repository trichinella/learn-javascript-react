import { createAsyncThunk } from "@reduxjs/toolkit";
import { hasDishesByRestaurantId } from "./dishSlice.js";

export const getDishesByRestaurant = createAsyncThunk(
    "dish/getDishesByRestaurant",
    async (restaurantId, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("empty result");
        }

        return result;
    },
    {
        condition: (restaurantId, {getState}) => {
            return !hasDishesByRestaurantId(getState(), restaurantId);
        },
    }
);