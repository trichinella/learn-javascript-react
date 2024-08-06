import { createSlice } from "@reduxjs/toolkit";
import { RequestStatuses } from "../../../helpers/requestStatuses.js";

export const requestSlice = createSlice({
    name: "request",
    initialState: {},
    extraReducers: (builder) =>
        builder
            .addMatcher(
                ({type}) => type.endsWith(RequestStatuses.PENDING),
                (state, {meta}) => {
                    state[meta.requestId] = RequestStatuses.PENDING;
                }
            )
            .addMatcher(
                ({type}) => type.endsWith(RequestStatuses.FULFILLED),
                (state, {meta}) => {
                    state[meta.requestId] = RequestStatuses.FULFILLED;
                }
            )
            .addMatcher(
                ({type}) => type.endsWith(RequestStatuses.REJECTED),
                (state, {meta}) => {
                    state[meta.requestId] = RequestStatuses.REJECTED;
                }
            ),
    selectors: {
        selectRequestStatus: (state, requestId) => {
            return state[requestId]  || RequestStatuses.IDLE;
        },
    },
});

export const {selectRequestStatus} = requestSlice.selectors;