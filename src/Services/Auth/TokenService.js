import { jwtDecode } from 'jwt-decode';

export const isTokenValid = (token) => {
    const currentTime = Date.now() / 1000; // Current time in seconds
    const decodedToken = jwtDecode(token);
    return decodedToken.exp > currentTime;
};

export const isAuthenticated = () => {
    const tokens = localStorage.getItem('tokens');

    if (tokens) {
        const parsedData = JSON.parse(tokens);
        const { access } = parsedData;
        return access && isTokenValid(access);
    }

    return false;
};
