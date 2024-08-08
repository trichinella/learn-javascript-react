import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getUsers } from "./getUsers.js";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
    name: 'user',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>{
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        })
    },
    selectors: {
        selectUserById: (state, id) => state.entities[id],
        selectUserIds: (state) => state.ids,
    },
})

export const {selectUserById, selectUserIds} = userSlice.selectors