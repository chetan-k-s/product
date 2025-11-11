const BASE_URL = 'http://localhost:5000/api/abc_retail'

export const addProduct = async (data) => {
    const res = await fetch(`${BASE_URL}/add`, {
        method : "POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(data)
    })

    return await res.json();
}

export const searchProduct = async (data) => {
    const res = await fetch(`${BASE_URL}/${data}`);
    return await res.json();
}

export const deleteProduct = async (data) => {
    const res = await fetch(`${BASE_URL}/${data}`,{
        method : "DELETE"
    })
    return await res.json();
}

export const displayProducts = async () => {
    const res = await fetch(`${BASE_URL}/display`);
    return await res.json();
}

export const updateProducts = async (id, data) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return await res.json();
};

