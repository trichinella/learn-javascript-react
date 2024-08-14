export async function getDishById(id) {
    const result = await fetch(`http://localhost:3001/api/dish/${id}`, {
        next: {
            revalidate: 120,
        },
    });

    return result.json();
}