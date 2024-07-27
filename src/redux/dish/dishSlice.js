import { createSlice } from '@reduxjs/toolkit'
import { normalizedDishes } from "../../materials/normalized-mock.js";

const initialState = {
    entities: normalizedDishes.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}),
    ids: normalizedDishes.map(({id}) => id),
}

export const dishSlice = createSlice({
    name: 'dish',
    initialState,
    selectors: {
        selectDishById: (state, id) => state.entities[id],
        selectDishIds: (state) => state.ids,
    },
})

export const {selectDishById, selectDishIds} = dishSlice.selectors