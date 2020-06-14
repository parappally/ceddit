export const getJwt = () => {
    return localStorage.getItem('token');
}

export const removeJwt = () => {
    localStorage.removeItem('token');
}