import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantDishesLoaded } from "../restaurant/restaurantSlice.js";

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
            return !selectRestaurantDishesLoaded(getState(), restaurantId);
        },
    }
);