export async function getDishesByRestaurantId(id) {
    const result = await fetch(`http://localhost:3001/api/dishes?restaurantId=${id}`, {
        next: {
            revalidate: 120,
        },
    });

    return result.json();
}