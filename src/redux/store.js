import { configureStore } from '@reduxjs/toolkit'
import { restaurantSlice } from "./entities/restaurant/restaurantSlice.js";
import { reviewSlice } from "./entities/review/reviewSlice.js";
import { userSlice } from "./entities/user/userSlice.js";
import { dishSlice } from "./entities/dish/dishSlice.js";
import { cartSlice } from "./ui/cart/cartSlice.js";
import { requestSlice } from "./ui/request/requestSlice.js";

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [requestSlice.name]: requestSlice.reducer,
    },
})