import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./dishSlice.js";

export const getDishById = createAsyncThunk(
    "dish/getDishById",
    async (id, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:3001/api/dish/${id}`);

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("empty result");
        }

        return result;
    },
    {
        condition: (id, {getState}) => {
            return !selectDishById(getState(), id);
        },
    }
);