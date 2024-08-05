import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./restaurantSlice.js";

export const getRestaurantById = createAsyncThunk(
    "restaurant/getRestaurantById",
    async (restaurantId, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:3001/api/restaurant/${restaurantId}`);

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("empty result");
        }

        return result;
    },
    {
        condition: (id, {getState}) => {
            return !selectRestaurantById(getState(), id);
        },
    }
);