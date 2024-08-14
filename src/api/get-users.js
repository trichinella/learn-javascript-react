export async function getUsers() {
    const result = await fetch("http://localhost:3001/api/users", {
        next: {
            revalidate: 120,
        },
    });

    return result.json();
}