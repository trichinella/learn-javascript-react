export async function getRestaurants() {
    const result = await fetch("http://localhost:3001/api/restaurants", {
        next: {
            revalidate: 120,
        },
    });

    return result.json();
}