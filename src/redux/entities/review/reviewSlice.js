import { createSlice } from '@reduxjs/toolkit'
import { normalizedReviews } from "../../../materials/normalized-mock.js";

const initialState = {
    entities: normalizedReviews.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}),
    ids: normalizedReviews.map(({id}) => id),
}

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    selectors: {
        selectReviewById: (state, id) => state.entities[id],
        selectReviewIds: (state) => state.ids,
    },
})

export const {selectReviewById, selectReviewIds} = reviewSlice.selectors