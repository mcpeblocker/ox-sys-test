import config from '../config.json';

const getAuthToken = () => {
    return window.localStorage.getItem(config.tokenName);
}

const setAuthToken = (token) => {
    return window.localStorage.setItem(config.tokenName, token);
}

const removeAuthToken = () => {
    return window.localStorage.removeItem(config.tokenName);
}

const getAuthHeader = () => {
    return {
        headers: {
            "Authorization": `Bearer ${getAuthToken()}`
        }
    };
}

let auth = {
    getAuthToken,
    setAuthToken,
    removeAuthToken,
    getAuthHeader
};

export default auth;