import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/api"}),
    tagTypes: ["Restaurant", "Dish", "Review", "User"],
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => "/restaurants",
            providesTags: [{type: "Restaurant", id: "ALL"}],
        }),
        getDishesByRestaurantId: builder.query({
            query: ({restaurantId}) => `/dishes?restaurantId=${restaurantId}`,
            providesTags: (result, _, {restaurantId}) => [
                {type: "Dish", restaurantId},
            ],
        }),
        getDishById: builder.query({
            query: ({dishId}) => `/dish/${dishId}`,
            providesTags: (result, _, {dishId}) => [
                {type: "Dish", dishId},
            ],
        }),
        getReviewsByRestaurantId: builder.query({
            query: ({restaurantId}) => `/reviews?restaurantId=${restaurantId}`,
            providesTags: (result, _, {restaurantId}) => [
                {type: "Review", restaurantId},
            ],
        }),
        getUsers: builder.query({
            query: () => "/users",
            providesTags: [{type: "User", id: "ALL"}],
        }),
        addReview: builder.mutation({
            query: ({ restaurantId, review }) => ({
                url: `/review/${restaurantId}`,
                method: "POST",
                body: review,
            }),
            invalidatesTags: (result, _, { restaurantId }) => [
                { type: "Review", restaurantId },
                { type: "Review", id: result.id },
            ],
        }),
        editReview: builder.mutation({
            query: ({ id, review }) => ({
                url: `/review/${id}`,
                method: "PATCH",
                body: review,
            }),
            invalidatesTags: (result, _, { id }) => [
                { type: "Review", id: id },
            ],
        }),
    }),
});

export const {
    useGetRestaurantsQuery,
    useGetDishesByRestaurantIdQuery,
    useGetReviewsByRestaurantIdQuery,
    useGetUsersQuery,
    useGetDishByIdQuery,
    useAddReviewMutation,
    useEditReviewMutation,
} = apiSlice;