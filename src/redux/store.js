import { configureStore } from '@reduxjs/toolkit'
import { restaurantSlice } from "./restaurant/restaurantSlice.js";
import { reviewSlice } from "./review/reviewSlice.js";
import { userSlice } from "./user/userSlice.js";
import { dishSlice } from "./dish/dishSlice.js";

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
    },
})