export async function getReviewsByRestaurantId(id) {
    const result = await fetch(`http://localhost:3001/api/reviews?restaurantId=${id}`, {
        next: {
            revalidate: 120,
        },
    });

    return result.json();
}