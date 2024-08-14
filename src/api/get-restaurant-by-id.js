export async function getRestaurantById(id) {
    const result = await fetch(`http://localhost:3001/api/restaurant/${id}`, {
        next: {
            revalidate: 120,
        },
    });

    return result.json();
}