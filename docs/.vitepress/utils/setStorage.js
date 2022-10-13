
export const setItem = (item, data) => {
    localStorage.setItem(item, JSON.stringify(data));
}

export const getItem = (item) => {
    return JSON.parse(localStorage.getItem(item));
}

export const removeItem = (item) => {
    localStorage.removeItem(item);
}






